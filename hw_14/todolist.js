const formEl = document.querySelector('#create-todo-item');
const inputEl = document.querySelector('.js-add-todo');
const listEl = document.querySelector('.js-todo-list');

let allTodos = [];

if (localStorage.getItem('todo')) {
  allTodos = JSON.parse(localStorage.getItem('todo'));

  for (const item of allTodos) {
    addTodoToList(item);
  }
}

/**
 * Add todo item to the list
 * @param {*} todoItemText - text for task
 */
function addTodoToList(todoItem) {
  const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center ${
          todoItem.status === 'completed' ? 'bg-secondary' : ''
        }">
            <input 
                class="form-check-input me-1" 
                type="checkbox" value="" 
                id="${todoItem.id}" 
                ${todoItem.status === 'completed' ? 'checked disabled' : ''}
            >
            <label class="form-check-label" for="${todoItem.id}">${
    todoItem.text
  }</label>
            <button class="btn btn-sm btn-warning ms-auto me-2" data-taskId="${
              todoItem.id
            }">Edit</button>
            <button class="btn btn-sm btn-danger" data-taskId="${
              todoItem.id
            }">Del</button>
        </li>
    `;
  listEl.innerHTML += html;
  inputEl.value = '';
}

/**
 * Complete task
 * @param {*} target - checkbox item element
 */
function completeTask(target) {
  const taskId = Number(target.id);
  const listItem = target.parentElement;
  const isChecked = target.checked;

  allTodos.forEach((todoItem) => {
    if (todoItem.id === taskId) {
      todoItem.status = isChecked ? 'completed' : 'active';
    }
  });

  localStorage.setItem('todo', JSON.stringify(allTodos));
  target.checked = isChecked;
  listItem.classList.toggle('bg-secondary', isChecked);
}

/**
 * Remove task
 * @param {*} target - button item element
 */
function removeTask(target) {
  const taskId = Number(target.getAttribute('data-taskId'));
  const parent = target.parentElement;

  allTodos.forEach((todoItem) => {
    if (todoItem.id === taskId) {
      allTodos.splice(allTodos.indexOf(todoItem), 1);
    }
  });

  localStorage.setItem('todo', JSON.stringify(allTodos));
  parent.remove();
}

// Edit task

function editTask(target) {
  const taskId = Number(target.getAttribute('data-taskId'));
  const listItem = target.closest('li');
  const newText = prompt('Enter new text:');

  if (newText !== null) {
    allTodos.forEach((todoItem) => {
      if (todoItem.id === taskId) {
        todoItem.text = newText;
      }
    });

    localStorage.setItem('todo', JSON.stringify(allTodos));

    const label = listItem.querySelector('.form-check-label');
    label.textContent = newText;
  }
}

// Form submit
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoItemText = inputEl.value;

  const existingTodoItem = allTodos.filter(
    (item) => item.text === todoItemText,
  );

  if (!existingTodoItem.length) {
    const todoItem = {
      id: new Date().getTime(),
      text: todoItemText,
      status: 'active',
    };

    addTodoToList(todoItem);

    allTodos.push(todoItem);

    localStorage.setItem('todo', JSON.stringify(allTodos));
  } else {
    const toastContainer = document.getElementById('toast-container');
    const html = `<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      This list name is already exist.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>`;

    toastContainer.innerHTML = html;
    const toastElList = document.querySelectorAll('.toast');
    const options = {
      animation: true,
      autohide: true,
      delay: 2000,
    };

    const toastList = [...toastElList].map(
      (toastEl) => new bootstrap.Toast(toastEl, options),
    );
    toastList.forEach((toast) => toast.show());
  }
});

// List item click
listEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT') {
    completeTask(e.target);
  } else if (e.target.classList.contains('btn-warning')) {
    editTask(e.target);
  } else if (e.target.classList.contains('btn-danger')) {
    removeTask(e.target);
  }
});
