const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoUnorderedList = document.querySelector(".todo-unordered-list");
const todoContainer = document.querySelector(".todo-container");
const errorParagraph = document.createElement("p");

todoForm.addEventListener("submit", (event) => {
  if (todoInput.value.trim() !== "") {
    const todoList = document.createElement("li");
    event.preventDefault();
    todoList.classList.add("todo-list-element");
    todoList.textContent = todoInput.value;
    todoUnorderedList.append(todoList);
    errorParagraph.remove();
  } else {
    event.preventDefault();
    errorParagraph.textContent = "You must enter a valid string";
    errorParagraph.classList.add("error-paragraph");
    todoContainer.append(errorParagraph);
  }
});
