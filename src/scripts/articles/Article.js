import { Nutshell } from "../Nutshell.js";
import { deleteArticle } from "./ArticleData.js";

const formatDate = date => {
  return new Date(date.split(', ')[0]).toString().split(' ').slice(0, 4).join(' ');
}

export const Article = (obj, tags) => {
  return `
    <article id="article-${obj.id}">
      <h4>${obj.title}</h4>
      <!-- Author info should go here -->
      ${tags.map(tag => `<a href="javascript:;" class="badge bg-primary tagId_${tag.id}">${tag.label}</a>`).join('')}
      <div>${obj.user.email} | <a href="${obj.url}" target="_blank" rel="noopener noreferrer">View Article</a></div>
      <div>${formatDate(obj.date)}</div>
      <div><p>${obj.synopsis}</p></div>
      ${
        // Only render edit and delete options if current user made the article post
        +sessionStorage.activeUser === obj.userId ?
          `<button id="edit-article-${obj.id}" type="button" class="btn btn-primary btn-sm text-sm my-auto me-1 mb-0">Edit</button>
          <button id="delete-article-${obj.id}" type="button" class="btn btn-primary btn-sm text-sm my-auto me-1 mb-0">Delete</button>` :
          ''
        
      }
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
      .then(Nutshell);
    }
  }
});