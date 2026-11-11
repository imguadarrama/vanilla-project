# 01 — Todo List (warm-up, 30–45 min)

**Goal:** DOM fluency. Get comfortable building UI without a framework.

## Spec

- [x] A form with a text input and an "Add" button. Submitting adds a todo (ignore empty or whitespace-only input).
- [x] Render the list from a `state` array, e.g. `[{ id, text, done }]`.
- [x] Clicking a todo toggles `done` (strike-through style).
- [x] Each todo has a delete button.
- [ ] Show the "X items left" count.
- [ ] Bonus: filters (All / Active / Done), and persist to `localStorage`.

## Concepts to practice

- `form` + `submit` event + `e.preventDefault()`
- **Event delegation**: ONE listener on the `<ul>`, then use `e.target.closest('li')` and `dataset.id`
- The `state → render()` pattern
- `classList.toggle('done', todo.done)`
