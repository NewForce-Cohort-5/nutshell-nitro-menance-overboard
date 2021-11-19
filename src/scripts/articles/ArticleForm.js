import { saveArticle, useArticles, updateArticle } from "./ArticleData.js";
import { ArticleList } from "./ArticleList.js";

const isValid = article => {
  return ((article.title !== '' && article.title.length > 2) && (article.url.startsWith('https://') && article.url.match(/\.\w+/) !== null) && article.synopsis !== '');
}

const setFormFields = article => {
  document.querySelector('#article_title').value = article.title;
  document.querySelector('#article_url').value = article.url;
  document.querySelector('#article_synopsis').value = article.synopsis;
}

export const ArticleForm = (articleId = 0) => {
  return `
  <form id="article-form">
    <input id="article_title" type="text" placeholder="enter title">
    <input id="article_url" type="text" placeholder="enter url">
    <input id="article_synopsis" type="text" placeholder="enter synopsis">
    <input id="article_id" type="number" value=${articleId} hidden>
    <input id="article_userId" type="number" value=${sessionStorage.activeUser} hidden>
    <button id="save-article" type="submit">Save Article</button>
  </form>
  `;
}

const contentTarget = document.querySelector('.dashboard');
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
      date: new Date(Date.now()).toLocaleString()
    }

    if (isValid(article)) {
      document.querySelector('#article_title').value = '';
      document.querySelector('#article_url').value = '';
      document.querySelector('#article_synopsis').value = '';
      
      if(e.target.textContent === 'Save Article') {
        saveArticle(article)
        .then(ArticleList);
      } else {
        updateArticle(article)
        .then(ArticleList);
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
    if (!document.querySelector('#article-form')) contentTarget.innerHTML += ArticleForm(articleId);
    // Make the button say Edit Article instead of Save Article
    document.querySelector('#save-article').textContent = 'Edit Article';
    // Set the form fields to match the contents of the article user wishes to edit
    setFormFields(articleToEdit);

  }
});