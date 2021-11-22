import { useArticles } from "./ArticleData.js";
import { Article } from "./Article.js";

const eventHub = document.querySelector('#container');

export const ArticleList = () => {
    return `<div class="articles">
      ${render(useArticles().reverse())}
    </div>`;
}

const render = articleCollection => {
  return articleCollection.map( article => Article(article)).join('');
}

eventHub.addEventListener('click', e => {
  if (e.target.id === 'new-article') {
    document.querySelector('#article-form-container').classList.remove('d-none');
    e.target.classList.add('d-none');
  }
});