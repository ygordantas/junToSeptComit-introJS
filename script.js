const dialog = document.getElementById("dialog");
const showTodoFormBtn = document.getElementById("showTodoFormBtn");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const textarea = document.getElementById("todo");
const progressBar = document.getElementById("dialogClosingTimer");
const closeDialogTime = 150000;

let editingTodoElement;
let intervalId;
let timeoutId;

const onDialogCloseHandler = () => {
  dialog.close();
  clearInterval(intervalId);
  clearTimeout(timeoutId);
  textarea.value = "";
};

const onDialogOpenHandler = () => {
  dialog.showModal();
  let timeLeft = closeDialogTime;
  progressBar.max = closeDialogTime;

  intervalId = setInterval(() => {
    timeLeft -= 100;
    progressBar.value = timeLeft;
  }, 100);

  timeoutId = setTimeout(() => {
    onDialogCloseHandler();
    timeLeft = closeDialogTime;
  }, closeDialogTime);
};

const createBtn = (buttonText, classes) => {
  const btn = document.createElement("button");

  btn.innerHTML = buttonText;
  btn.classList.add("btn");

  if (classes && classes.length > 0) {
    btn.classList.add(classes);
  }

  return btn;
};

const onNewTodoSaveHandler = (userInput) => {
  const newTodoContainer = document.createElement("li");
  const textContainer = document.createElement("div");
  const todoText = document.createElement("p");
  const actionContainer = document.createElement("div");
  const timestamp = document.createElement("p");
  const deleteBtn = createBtn("x", "danger");
  const editBtn = createBtn("edit", "primary");

  newTodoContainer.classList.add("fade-in");

  deleteBtn.addEventListener("click", () => {
    newTodoContainer.classList.remove("fade-in");
    newTodoContainer.classList.add("fade-out");

    setTimeout(() => {
      newTodoContainer.remove();
    }, 300);
  });

  editBtn.addEventListener("click", () => {
    textarea.value = todoText.innerHTML;
    editingTodoElement = newTodoContainer;
    onDialogOpenHandler();
  });

  todoText.innerHTML = userInput;
  timestamp.innerHTML = new Date().toLocaleDateString();
  timestamp.classList.add("timestamp");

  textContainer.classList.add("text-container");
  actionContainer.classList.add("action-container");

  textContainer.append(todoText);
  actionContainer.append(timestamp, editBtn, deleteBtn);

  newTodoContainer.append(textContainer, actionContainer);

  todoList.prepend(newTodoContainer);
};

const onEditedTodoSaveHandler = (userInput) => {
  const textNode = editingTodoElement.querySelector("p");
  const timestampNode = editingTodoElement.querySelector(".timestamp");

  textNode.innerHTML = userInput;
  timestampNode.innerHTML = new Date().toLocaleDateString();

  editingTodoElement.classList.add("edited");
  setTimeout(() => {
    editingTodoElement.classList.remove("edited");
    editingTodoElement = null;
  }, 300);
};

showTodoFormBtn.addEventListener("click", onDialogOpenHandler);

closeDialogBtn.addEventListener("click", onDialogCloseHandler);

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = textarea.value.trim();

  if (!userInput) {
    alert("Your todo is empty. Please provide a value before saving it.");
    return;
  }

  if (editingTodoElement) {
    onEditedTodoSaveHandler(userInput);
  } else {
    onNewTodoSaveHandler(userInput);
  }

  onDialogCloseHandler();
});
