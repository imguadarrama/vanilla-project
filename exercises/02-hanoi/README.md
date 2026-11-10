# 02 — Tower of Hanoi ⭐ (the main one)

Build it **twice**: once slowly while learning, then again from scratch under a 60-min timer.

## Rules of the puzzle
- 3 pegs, N discs of different sizes, all starting on the first peg (largest at the bottom).
- Move one disc at a time, always the top disc of a peg.
- A disc can never sit on top of a smaller disc.
- Win: all discs on the last peg. Minimum moves = 2ⁿ − 1.

## Levels
### L1 — Render
- [ ] Number input for the disc count (3–8) + "Start" button.
- [ ] Render 3 pegs, discs stacked bottom-up, width proportional to size.

### L2 — Interaction + rules
- [ ] Click a peg to select its top disc (highlight it). Click another peg to move it there.
- [ ] Clicking the same peg again cancels the selection.
- [ ] Clicking an empty peg first does nothing.
- [ ] Reject invalid moves (bigger onto smaller) with visual feedback (e.g. a shake, red flash, message).

### L3 — Game state
- [ ] Move counter, plus "Minimum: 2ⁿ − 1".
- [ ] Win detection plus a message. Block moves after winning.
- [ ] Reset button.

### L4 — Auto-solve (recursion)
- [ ] "Solve" button: reset, then compute the moves recursively and animate them with `await sleep(ms)`.
- [ ] Disable user input while solving.
- [ ] Check: n = 3 → 7 moves, n = 4 → 15 moves.

### L5 — Bonus
- [ ] Undo (a history stack of moves).
- [ ] Keyboard: press `1`/`2`/`3` to select or move.
- [ ] Speed slider for the auto-solve.
- [ ] Drag and drop.

## Hints (read only if stuck)
<details><summary>Data model</summary>

`pegs = [[5, 4, 3, 2, 1], [], []]` — each peg is a stack, so the last element is the top disc.
A move is `pegs[to].push(pegs[from].pop())`.
A move is valid if `pegs[from].length > 0` and (`pegs[to]` is empty or `pegs[to].at(-1) > pegs[from].at(-1)`).
</details>

<details><summary>CSS idea</summary>

Peg: `display: flex; flex-direction: column-reverse; align-items: center;`
Disc: `width: calc(var(--size) * 25px)` and set it from JS: `disc.style.setProperty('--size', size)`.
</details>

<details><summary>Recursion idea</summary>

To move n discs from A to C: move n−1 discs from A to B (using C), move the biggest disc A → C,
then move n−1 discs from B to C (using A). Base case: n === 0 → do nothing.
Generate the list of moves first, then animate it. Keeping logic separate from view is the key point.
</details>

## Be ready to explain
- Why does it take exactly 2ⁿ − 1 moves? (T(n) = 2·T(n−1) + 1)
- What is the time complexity of the solver? What is the recursion depth?
