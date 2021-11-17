let articles = []

export const useArticles = () => {
    return articles.slice()
}

export const getArticles = () => {
    return fetch("http://localhost:8088/articles")
    .then(response => response.json())
    .then(data => {
        articles = data
    })
}
