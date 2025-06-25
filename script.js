const dialog = document.getElementById("dialog");
const showTodoFormBtn = document.getElementById("showTodoFormBtn");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const closeDialogBtn = document.getElementById("closeDialogBtn");

let todos = [];
let nextId = 1;

showTodoFormBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

todoForm.addEventListener("submit", () => {
  const textarea = document.getElementById("todo");
  const newTodoContainer = document.createElement("li");
  const todoText = document.createElement("p");
  const timestamp = document.createElement("p");
  const deleteBtn = document.createElement("button");

  deleteBtn.addEventListener("click", () => {
    todos = todos.filter((e) => e.id !== nextId);
    console.log(todos);
    console.log(nextId);
  });

  deleteBtn.innerHTML = "delete";

  const currentDate = new Date();

  todoText.innerHTML = textarea.value;
  timestamp.innerHTML = currentDate.toLocaleDateString();

  newTodoContainer.append(todoText, timestamp, deleteBtn);

  todoList.prepend(newTodoContainer);

  textarea.value = "";

  todos.push({
    id: nextId,
    text: todoText.innerHTML,
    timestamp: currentDate,
  });

  nextId++;

  console.log(todos);
});
