const dialog = document.getElementById("dialog");
const showTodoFormBtn = document.getElementById("showTodoFormBtn");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const closeDialogBtn = document.getElementById("closeDialogBtn");

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

  newTodoContainer.classList.add("fade-in");

  deleteBtn.addEventListener("click", () => {
    newTodoContainer.classList.remove("fade-in");
    newTodoContainer.classList.add("fade-out");

    setTimeout(() => {
      newTodoContainer.remove();
    }, 300);
  });

  deleteBtn.innerHTML = "delete";
  deleteBtn.classList.add("btn");

  const currentDate = new Date();

  todoText.innerHTML = textarea.value;
  timestamp.innerHTML = currentDate.toLocaleDateString();

  newTodoContainer.append(todoText, timestamp, deleteBtn);

  todoList.prepend(newTodoContainer);

  textarea.value = "";
});
