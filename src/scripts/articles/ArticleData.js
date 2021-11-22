let articles = [];

export const useArticles = () => {
  return articles.slice();
}

export const getArticles = () => {
  return fetch('http://localhost:8088/articles?_expand=user')
  .then(res => res.json())
  .then(data => articles = data);
}

export const saveArticle = article => {
  return fetch('http://localhost:8088/articles', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  }).then(getArticles);
}

export const updateArticle = article => {
  return fetch(`http://localhost:8088/articles/${article.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  }).then(getArticles);
}

export const deleteArticle = articleId => {
  return fetch(`http://localhost:8088/articles/${articleId}`, {
    method: "DELETE"
  }).then(getArticles);
}
