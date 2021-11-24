let articleTags = [];

export const useArticleTags = () => {
  return articleTags.slice();
}

export const getArticleTags = () => {
  return fetch('http://localhost:8088/articletags?_expand=tag&_expand=article')
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
  }).then(getArticleTags);
}

export const updateArticleTag = articleTag => {
  return fetch(`http://localhost:8088/articletags/${articleTag.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(articleTag)
  });
}

export const deleteArticleTag = articleTagId => {
  return fetch(`http://localhost:8088/articletags/${articleTagId}`, {
    method: "DELETE"
  }).then(getArticleTags);
}