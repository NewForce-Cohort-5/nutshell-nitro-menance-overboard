import { getArticles, useArticles } from "./ArticleData.js";
import { Article } from "./Article.js";
import { ArticleForm } from "./ArticleForm.js";

const contentTarget = document.querySelector('.dashboard');
const eventHub = document.querySelector('#container');

export const ArticleList = () => {
  // getArticles().then(() => {

    // If articles are already rendered from initial page load remove them and the form and rebuild the article list
    if (contentTarget.querySelector('.articles')) contentTarget.querySelector('.articles').remove();
    if (document.querySelector('#article-form')) document.querySelector('#article-form').remove();
    
    
    // Building it up with a string variable so the articles div wraps around the articles
    let html = '<div class="articles">';
    html += render(useArticles().reverse());
    html += '<button id="new-article">New Article</button>';
    html += '</div>';

    // Add the html string to the inner contents container
    // contentTarget.innerHTML += html;
    return html
  // });
}

const render = articleCollection => {
  return articleCollection.map( article => Article(article)).join('');
}

eventHub.addEventListener('click', e => {
  if (e.target.id === 'new-article') {
    contentTarget.innerHTML += ArticleForm();
  }
});