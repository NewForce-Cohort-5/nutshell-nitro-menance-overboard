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
    return Article(article, tags);
  }).join('');
}

eventHub.addEventListener('click', e => {
  if (e.target.id === 'new-article') {
    document.querySelector('#article-form-container').classList.remove('d-none');
    setFormFields({title: '', url: '', synopsis: '', id: 0});
    document.querySelector('#save-article').textContent = 'Save Article';
  }

  if (Array.from(e.target.classList).find(value => value.startsWith('tagId'))) {
    const [,tagId] = Array.from(e.target.classList).find(value => value.startsWith('tagId')).split('_');
    const relationships = useArticleTags().filter(at => at.tagId === +tagId);
    const articles = useArticles().filter(article => relationships.find(at => at.articleId === article.id));
    document.querySelector('.articles').innerHTML = render(articles);
  }
});