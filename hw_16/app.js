document.getElementById('searchBtn').addEventListener('click', () => {
  let id = document.getElementById('inputForId').value;
  if (id >= 1 && id <= 100) {
    fetchData(id).then(showData).catch(handleError);
  } else {
    alert('enter ID between 1 and 100.');
  }
});

function fetchData(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('no response');
        }
        return response.json();
      })
      .then((post) => {
        resolve(post);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function showData(data) {
  let container = document.getElementById('container');
  container.innerHTML = `<h2>${data.title}</h2>
                    <p>${data.body}</p>
                    <button onclick="fetchComments(${data.id})">Get Comments</button>
                    <div id="commentsContainer"></div>`;
}

function fetchComments(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((comments) => showComments(comments))
    .catch((error) => handleError(error));
}

function showComments(comments) {
  let commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = '<h3>Comments</h3>';
  comments.forEach((comment) => {
    let commentDiv = document.createElement('div');
    commentDiv.innerHTML = `
                    <p>Name: ${comment.name}</p>
                    <p>Email: ${comment.email}</p>
                    <p>Comment: ${comment.body}</p>
                `;
    commentsContainer.appendChild(commentDiv);
  });
}

function handleError(error) {
  console.log('Error:', error);
  alert('An error occurred. Please try again later.');
}
