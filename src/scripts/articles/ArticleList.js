import { useArticles } from "./ArticleData.js";
import { Article } from "./Article.js";
import { setFormFields } from "./ArticleForm.js";
import { useArticleTags } from "../articletags/ArticleTagData.js";
import { useTags } from "../tags/TagData.js";

const eventHub = document.querySelector('#container');

export const ArticleList = () => {
    return `
    <div class="articles d-flex">
      ${render(useArticles().reverse())}
    </div>`;
}

const render = articleCollection => {
  return articleCollection.map( article => {
    const articleTags = useArticleTags().filter(at => at.articleId === article.id);
    const tags = articleTags.map(at => useTags().find(tag => tag.id === at.tagId));
    return Article(article, tags)
  }).join('');
}

eventHub.addEventListener('click', e => {
  if (e.target.id === 'new-article') {
    document.querySelector('#article-form-container').classList.remove('d-none');
    setFormFields({title: '', url: '', synopsis: '', id: 0});
    document.querySelector('#save-article').textContent = 'Save Article';
  }
});