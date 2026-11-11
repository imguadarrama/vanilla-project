const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoUnorderedList = document.querySelector(".todo-unordered-list");
const errorParagraph = document.querySelector("#error-paragraph");
const state = [];

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = todoInput.value.trim();
  if (value === "") {
    errorParagraph.hidden = false;
    todoInput.setAttribute("aria-invalid", "true");
    return;
  }

  state.push({
    id: crypto.randomUUID(),
    text: value,
    done: false,
  });
  todoInput.value = "";
  errorParagraph.hidden = true;
  render(state);
});

function render(state) {
  todoUnorderedList.replaceChildren();

  state.forEach((item) => {
    const todoList = document.createElement("li");
    const deleteButton = document.createElement("button");

    todoList.classList.add("todo-list");
    todoList.textContent = item.text;
    todoList.dataset.id = item.id;
    deleteButton.textContent = "Delete task";

    todoUnorderedList.appendChild(todoList);
    todoUnorderedList.appendChild(deleteButton);
  });
}
