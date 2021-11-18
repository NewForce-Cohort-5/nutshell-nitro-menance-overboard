import { deleteArticle } from "./ArticleData.js";
import { ArticleList } from "./ArticleList.js";

export const Article = (obj) => {
  return `
    <article id="article-${obj.id}">
      <h2>${obj.title}</h2>
      <!-- Author info should go here -->
      <div>Posted by: ${obj.userId}</div>
      <div>${obj.date}</div>
      <div><a href="${obj.url}">${obj.url}</a></div>
      <div><p>${obj.synopsis}</p></div>
      <button id="delete-article-${obj.id}">Delete</button>
    </article>
  `;
}

const eventHub = document.querySelector('#container');
eventHub.addEventListener('click', e => {
  if (e.target.id.startsWith('delete-article')) {
    if (confirm('Are you sure you want to delete this article?')) {
      e.preventDefault();
      const [,,articleId] = e.target.id.split('-');
      deleteArticle(articleId)
      .then(ArticleList);
    }
  }
});