import { saveArticle } from "./ArticleData.js";
import { ArticleList } from "./ArticleList.js";

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

    document.querySelector('#article_title').value = '';
    document.querySelector('#article_url').value = '';
    document.querySelector('#article_synopsis').value = '';
    document.querySelector('#article_userId').value = '';
    
    saveArticle(newArticle)
    .then(ArticleList);
  }
});