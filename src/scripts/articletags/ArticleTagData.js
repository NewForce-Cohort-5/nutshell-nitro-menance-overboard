let articleTags = [];

export const useArticlesTags = () => {
  return articleTags.slice();
}

export const getArticlesTags = () => {
  return fetch('http://localhost:8088/articletags?_expand=user&_expand=article')
  .then(res => res.json())
  .then(data => articleTags = data);
}

export const saveArticleTag = articleTag => {
  return fetch('http://localhost:8088/articletags', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(articleTag)
  }).then(getArticles);
}

export const updateArticleTag = articleTag => {
  return fetch(`http://localhost:8088/articletags/${articleTag.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(articleTag)
  }).then(getArticles);
}

export const deleteArticleTag = articleTagId => {
  return fetch(`http://localhost:8088/articletags/${articleTagId}`, {
    method: "DELETE"
  }).then(getArticles);
}