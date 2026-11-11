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
    const labelDiv = document.createElement("div");
    const todoItem = document.createElement("li");
    const listDiv = document.createElement("div");
    const span = document.createElement("span");
    const label = document.createElement("label");
    const checkBox = document.createElement("input");
    const deleteButton = document.createElement("button");

    labelDiv.classList.add("label-container");
    listDiv.classList.add("list-container");
    label.innerText = "Done";
    checkBox.type = "checkbox";
    todoItem.classList.add("todo-list");
    labelDiv.classList.toggle("done", item.done);
    todoItem.setAttribute("data-id", item.id);
    span.innerText = item.text;
    deleteButton.textContent = "Delete task";

    labelDiv.appendChild(label);
    labelDiv.appendChild(checkBox);
    listDiv.appendChild(span);
    listDiv.appendChild(labelDiv);
    listDiv.appendChild(deleteButton);

    todoItem.appendChild(listDiv);
    todoUnorderedList.appendChild(todoItem);
    checkBox.checked = item.done;
    checkBox.addEventListener("change", () => {
      item.done = checkBox.checked;
      render(state);
    });
  });
}
