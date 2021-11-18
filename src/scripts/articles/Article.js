export const Article = (obj) => {
  return `
    <article id="article-${obj.id}">
      <h2>${obj.title}</h2>
      <!-- Author info should go here -->
      <div>Posted by: ${obj.userId}</div>
      <div>${obj.date}</div>
      <div><a href="${obj.url}">${obj.url}</a></div>
      <div><p>${obj.synopsis}</p></div>
    </article>
  `;
}