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
    const div = document.createElement("div");
    const labelDiv = document.createElement("div");
    const todoItem = document.createElement("li");
    const label = document.createElement("label");
    const checkBox = document.createElement("input");
    const deleteButton = document.createElement("button");

    div.classList.add("todo-container");
    labelDiv.classList.add("label-container");
    label.innerText = "Done";
    checkBox.type = "checkbox";
    todoItem.classList.add("todo-list");
    todoItem.setAttribute("data-id", item.id);
    todoItem.classList.toggle("done", item.done);
    todoItem.innerText = item.text;
    deleteButton.textContent = "Delete task";

    div.appendChild(todoItem);
    labelDiv.appendChild(label);
    labelDiv.appendChild(checkBox);
    div.appendChild(labelDiv);
    div.appendChild(deleteButton);
    todoUnorderedList.appendChild(div);
  });
}
