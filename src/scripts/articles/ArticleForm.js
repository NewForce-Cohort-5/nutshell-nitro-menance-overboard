import { Nutshell } from "../Nutshell.js";
import { saveArticle, useArticles, updateArticle } from "./ArticleData.js";

const isValid = article => {
  return ((article.title !== '' && article.title.length > 2) && (article.url.startsWith('https://') && article.url.match(/\.\w+/) !== null) && article.synopsis !== '');
}

export const setFormFields = article => {
  document.querySelector('#article_title').value = article.title;
  document.querySelector('#article_url').value = article.url;
  document.querySelector('#article_synopsis').value = article.synopsis;
  document.querySelector('#article_id').value = article.id;
}

export const ArticleForm = (articleId = 0) => {
  return `
  <form id="article-form">
    <label class="form-control-label">Title</label>
    <div class="input-group input-group-outline">
      <input id="article_title" class="form-control" type="text" placeholder="Enter Title">
    </div>
    <label class="form-control-label">URL</label>
    <div class="input-group input-group-outline">
      <input id="article_url" class="form-control" type="text" placeholder="Paste url here">
    </div>
    <label class="form-control-label">Synopsis</label>
    <div class="input-group input-group-outline">
      <input id="article_synopsis" class="form-control" type="text" placeholder="Enter your thoughts...">
    </div>
    <div class="input-group input-group-outline">
      <input id="article_id" class="form-control" type="number" value=${articleId} hidden>
    </div>
    <input id="article_userId" class="form-control" type="number" value=${sessionStorage.activeUser} hidden>
    
    <button id="save-article" class="btn btn-primary mt-3" type="submit">Save Article</button>
  </form>
  `;
}

const eventHub = document.querySelector('#container');
eventHub.addEventListener('click', e => {
  if (e.target.id === 'save-article') {
    e.preventDefault();

    // The article is now shared between the create and edit article form
    const article = {
      title: document.querySelector('#article_title').value,
      url: document.querySelector('#article_url').value,
      synopsis: document.querySelector('#article_synopsis').value,
      userId: +document.querySelector('#article_userId').value,
      id: +document.querySelector('#article_id').value,
      date: new Date(Date.now()).toISOString()
    }

    if (isValid(article)) {
      document.querySelector('#article_title').value = '';
      document.querySelector('#article_url').value = '';
      document.querySelector('#article_synopsis').value = '';
      
      if(e.target.textContent === 'Save Article') {
        saveArticle(article)
        .then(Nutshell);
      } else {
        updateArticle(article)
        .then(Nutshell);
      }
    } else {
      alert('Please make sure all fields are filled out, Title has 3 characters and url has "https://" at the beginning');
    }

  }

  if (e.target.id.startsWith('edit-article')) {
    e.preventDefault();
    // Equivalent to 
    // const articleId = e.target.id.split('-')[2];
    const [,,articleId] = e.target.id.split('-');
    const articleToEdit = useArticles().find(article => article.id === +articleId);

    // Render the form as if it were new
    document.querySelector('#article-form-container').classList.remove('d-none');
    // Make the button say Edit Article instead of Save Article
    document.querySelector('#save-article').textContent = 'Edit Article';
    // Set the form fields to match the contents of the article user wishes to edit
    setFormFields(articleToEdit);

  }
});