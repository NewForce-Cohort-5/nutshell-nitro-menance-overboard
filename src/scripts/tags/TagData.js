let tags = [];

export const useTags = () => {
  return tags.slice();
}

export const getTags = () => {
  return fetch('http://localhost:8088/tags')
  .then(res => res.json())
  .then(data => tags = data);
}

export const saveTag = tag => {
  return fetch('http://localhost:8088/tags', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tag)
  }).then(getTags);
}

export const updateTag = tag => {
  return fetch(`http://localhost:8088/tags/${tag.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tag)
  }).then(getTags);
}

export const deleteTag = tagId => {
  return fetch(`http://localhost:8088/tags/${tagId}`, {
    method: "DELETE"
  }).then(getTags);
}