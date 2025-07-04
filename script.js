const dialog = document.getElementById("dialog");
const showTodoFormBtn = document.getElementById("showTodoFormBtn");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const textarea = document.getElementById("todo");
const progressBar = document.getElementById("dialogClosingTimer");
const closeDialogTime = 150000;

let intervalId;
let timeoutId;

const onDialogCloseHandler = () => {
  dialog.close();
  clearInterval(intervalId);
  clearTimeout(timeoutId);
  textarea.value = "";
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

showTodoFormBtn.addEventListener("click", () => {
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
});

closeDialogBtn.addEventListener("click", () => {
  onDialogCloseHandler();
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!textarea.value.trim()) {
    alert("Your todo is empty. Please provide a value before saving it.");
    return;
  }

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
    //TODO
  });

  todoText.innerHTML = textarea.value;
  timestamp.innerHTML = new Date().toLocaleDateString();
  timestamp.classList.add("timestamp");

  textContainer.classList.add("text-container");
  actionContainer.classList.add("action-container");

  textContainer.append(todoText);
  actionContainer.append(timestamp, editBtn, deleteBtn);

  newTodoContainer.append(textContainer, actionContainer);

  todoList.prepend(newTodoContainer);

  onDialogCloseHandler();
});

// EXERCISE:
// As user I want to be able to edit my existing todos
// once I click on the edit button, the dialog form should open with the
// todo text prepopulated.
// Once I hit save I want to see my todo updated in the list
// (Optional) => add some animation once we return to the list
