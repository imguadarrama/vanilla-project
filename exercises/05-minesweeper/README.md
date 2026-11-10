# 05 — Minesweeper (60–90 min)

## Spec
- [ ] An 8×8 grid with 10 mines placed randomly.
- [ ] Each cell knows its adjacent-mine count (0–8).
- [ ] Left click reveals. Clicking a mine = game over (reveal all mines).
- [ ] Revealing a **0** cell auto-reveals its neighbors (recursive flood fill, or BFS with a queue).
- [ ] Right click (`contextmenu` event + `preventDefault`) toggles a flag.
- [ ] Win when all non-mine cells are revealed.
- [ ] Bonus: the first click is never a mine.

## Concepts
2D arrays, neighbor offsets `[[-1,-1],[-1,0],...]`, bounds checks, recursion vs. iteration (BFS),
avoiding infinite recursion (mark visited).
