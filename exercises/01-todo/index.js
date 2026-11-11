const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoUnorderedList = document.querySelector(".todo-unordered-list");
const errorParagraph = document.querySelector("#todo-error");
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
    const todoItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    todoItem.classList.add("todo-list");
    todoItem.setAttribute("data-id", item.id);
    todoItem.classList.toggle("done", item.done);
    todoItem.innerText = item.text;
    deleteButton.textContent = "Delete task";

    todoUnorderedList.appendChild(todoItem);
    todoUnorderedList.appendChild(deleteButton);
  });
}
