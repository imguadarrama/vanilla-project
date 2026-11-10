# Vanilla JS Interview Prep Plan (HTML / CSS / JS, "Tower of Hanoi"-style)

## Context
- You have a technical interview using plain HTML, CSS and JavaScript. The interviewer mentioned something like the **Tower of Hanoi** puzzle. You can use docs (MDN) and other resources.
- They want to see **how you think**: how you break a problem down, model it, and turn it into working code. Knowing every API by heart matters much less.
- Your background is React/Angular, so the gap is not logic. The gap is **working with the DOM directly**, without a framework.
- Current project: `vanilla-project/` has an `index.html` that loads `style.css` and `index.js`. Both files are empty. It's a clean place to practice.

The most likely format: "build a small interactive puzzle or game in the browser." You render some state, react to clicks, enforce rules, detect a win, and maybe add an auto-solve.

---

## 1. Topics to study (in priority order)

### A. DOM fundamentals (the React → vanilla translation)
| React habit | Vanilla equivalent |
|---|---|
| JSX | `document.createElement`, `el.textContent`, `el.append()`, template strings + `innerHTML` (only for trusted content) |
| `onClick={...}` | `el.addEventListener('click', fn)` |
| Lists with `key` | Loop over an array and append children. **Event delegation**: one listener on the parent, then `e.target.closest('.peg')` |
| `className` / conditional classes | `el.classList.add / remove / toggle('selected', bool)` |
| Props / data on elements | `data-*` attributes → `el.dataset.index` |
| `useState` + re-render | A plain `state` object + your own `render()` function |
| Controlled inputs | `input.value`, the `input` / `change` / `submit` events, `e.preventDefault()` |

Also learn: `querySelector` / `querySelectorAll`, `replaceChildren()`, `setTimeout` / `setInterval`, `async` / `await` with a `sleep(ms)` helper for animations, and `keydown` events.

### B. The key pattern to show: **state → render**
```js
const state = { /* the single source of truth */ };
function render() { /* rebuild the DOM from state */ }
function handleAction() { /* update state */ render(); }
```
This is React's mental model written by hand. Interviewers like it because it **keeps the logic separate from the view**, and it's easy to debug and extend. Use it in every exercise.

### C. JavaScript logic
- Arrays as stacks and queues: `push`, `pop`, `shift`, `at(-1)`, `slice`, `map`, `filter`, `reduce`, `some`, `every`, `find`
- 2D arrays (grids): build them with `Array.from({length: n}, () => Array(n).fill(0))`, check neighbors, check bounds
- **Recursion**: base case plus recursive case (this is the core of Hanoi)
- Closures, simple modules (`<script type="module">`), destructuring, spread
- Basic complexity talk ("this is O(n²), that's fine for a 9×9 grid")

### D. CSS: just enough to visualize things fast
- **Flexbox** (pegs side by side, discs stacked with `flex-direction: column-reverse`)
- **Grid** (game boards: `grid-template-columns: repeat(n, 1fr)`)
- CSS custom properties driven from JS: `disc.style.setProperty('--size', n)` → `width: calc(var(--size) * 20px)`
- `transition` for smooth movement, `:hover`, a `.selected` state, basic centering

### E. Algorithms likely in this kind of interview
- Tower of Hanoi (recursion, minimum moves = 2ⁿ − 1)
- Grid traversal: flood fill / BFS / DFS (Minesweeper, maze)
- Win detection (tic-tac-toe rows, columns and diagonals)
- Shuffling (Fisher–Yates)
- Backtracking at a basic level (N-Queens, Sudoku), as a stretch goal

---

## 2. Practice exercises (build these in `vanilla-project/`)
Do each one **under a timer (45–60 min)** and talk out loud as if the interviewer were watching. Organize them as one folder per exercise, each with its own `index.html`, `style.css`, `index.js` and a `README.md` holding the spec.

1. **Warm-up: Todo list.** Add, toggle and delete items with event delegation and a state array. *Goal: DOM fluency.*
2. **⭐ Tower of Hanoi (the main one).** Spec, in increasing levels:
   - L1: Input for the number of discs (3–8). Render 3 pegs with discs stacked by size.
   - L2: Click a peg to select its top disc, then click a peg to move it. Reject a move onto a smaller disc and give visual feedback.
   - L3: Move counter, "minimum moves: 2ⁿ − 1", win detection (all discs on the last peg), reset button.
   - L4: **Auto-solve** button using recursion, animated step by step with `await sleep()`.
   - L5 (bonus): Undo (a history stack), keyboard controls (1/2/3), drag and drop.
   - State model to practice: `pegs = [[5,4,3,2,1], [], []]`. A move is `pegs[to].push(pegs[from].pop())`.
   - Core recursion to understand (not just copy):
     ```js
     function solve(n, from, to, via, moves = []) {
       if (n === 0) return moves;
       solve(n - 1, from, via, to, moves);
       moves.push([from, to]);
       solve(n - 1, via, to, from, moves);
       return moves;
     }
     ```
3. **Tic-tac-toe.** Grid rendering, turn handling, winner and draw detection, reset.
4. **Memory card game.** Shuffle, flip two cards, match or un-flip with `setTimeout`, lock input during the animation.
5. **Minesweeper (small).** 2D grid, neighbor counts, recursive flood-fill reveal, right-click to flag.
6. **15-puzzle (sliding tiles).** Valid-move logic, a solvable shuffle, win check.
7. **Stopwatch / timer + autocomplete search.** `setInterval`, `fetch` against a public API, a debounce helper.
8. **Stretch: Conway's Game of Life or N-Queens visualizer.** Grid simulation or backtracking with animation.

The Hanoi exercise is the priority. Build it **twice**: once slowly while learning, then again from scratch under a timer.

---

## 3. How to solve problems in the interview (this is what they're grading)
1. **Clarify** the requirements and edge cases before coding ("how many discs? should invalid moves show an error?").
2. **Model the data first.** Say it out loud: "I'll represent the pegs as an array of 3 stacks."
3. **Build the smallest working version**: render static state, then interaction, then rules, then extras.
4. **Keep functions small and well named**: `canMove(from, to)`, `moveDisc()`, `checkWin()`, `render()`.
5. **Test as you go** with `console.log` and the browser DevTools. Try the edge cases (empty peg, same peg clicked twice).
6. **Look things up openly** on MDN. They allowed it, and doing it calmly looks professional.
7. **Explain trade-offs** at the end: what you'd improve, how you'd scale it, accessibility (buttons instead of divs, `aria-label`).

---

## 4. Suggested schedule (about 2 weeks; compress it if the interview is sooner)
- **Days 1–2:** DOM fundamentals plus the todo list. Read the MDN pages "Introduction to the DOM" and "Event delegation".
- **Days 3–5:** Tower of Hanoi L1–L5. Study the recursion until you can explain it on paper with n = 3.
- **Days 6–8:** Tic-tac-toe, memory game, and the Flexbox/Grid review.
- **Days 9–11:** Minesweeper, 15-puzzle, timer and autocomplete.
- **Days 12–14:** Timed re-builds of Hanoi and one surprise exercise. Practice explaining out loud.

---

## 5. What I'll set up once you approve
- Reorganize `vanilla-project/` into an `exercises/` folder: `01-todo/`, `02-hanoi/`, … `08-stretch/`. Each gets empty `index.html` / `style.css` / `index.js` starter files plus a `README.md` with the spec and levels from section 2. A root `index.html` links to every exercise.
- **No solutions written in advance.** You write the code. After each exercise, ask me to review it, give hints, or act as a mock interviewer.

## Verification
- Open each exercise's `index.html` in the browser (or run `npx serve .`) and confirm it loads with no console errors.
- For Hanoi, auto-solve with n = 3 should finish in exactly 7 moves, and n = 4 in 15.
