import { saveArticle } from "./ArticleData.js";
import { ArticleList } from "./ArticleList.js";

const isValid = article => {
  return ((article.title !== '' && article.title.length > 2) && (article.url.startsWith('https://') && article.url.match(/\.\w+/) !== null) && article.synopsis !== '');
}

export const ArticleForm = () => {
  return `
  <form id="article-form">
    <input id="article_title" type="text" placeholder="enter title">
    <input id="article_url" type="text" placeholder="enter url">
    <input id="article_synopsis" type="text" placeholder="enter synopsis">
    <input id="article_userId" type="number" value=${sessionStorage.activeUser} hidden>
    <button id="save-article" type="submit">Save Article</button>
  </form>
  `;
}

const eventHub = document.querySelector('#container');
eventHub.addEventListener('click', e => {
  if (e.target.id === 'save-article') {
    e.preventDefault();

    const newArticle = {
      title: document.querySelector('#article_title').value,
      url: document.querySelector('#article_url').value,
      synopsis: document.querySelector('#article_synopsis').value,
      userId: +document.querySelector('#article_userId').value,
      date: new Date(Date.now()).toLocaleString()
    }
    
    if (isValid(newArticle)) {
      document.querySelector('#article_title').value = '';
      document.querySelector('#article_url').value = '';
      document.querySelector('#article_synopsis').value = '';
      document.querySelector('#article_userId').value = '';
      
      saveArticle(newArticle)
      .then(ArticleList);
    } else {
      alert('Please make sure all fields are filled out, Title has 3 characters and url has "https://" at the beginning');
    }

  }
});