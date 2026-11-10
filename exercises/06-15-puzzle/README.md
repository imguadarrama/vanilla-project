# 06 — 15 Puzzle / Sliding Tiles (60 min)

## Spec
- [ ] 4×4 grid with tiles 1–15 and one empty space.
- [ ] Clicking a tile next to the empty space slides it in. Other clicks do nothing.
- [ ] Shuffle that is **always solvable** (tip: start solved and do ~200 random valid moves).
- [ ] Move counter, win detection, restart.
- [ ] Bonus: arrow-key controls; slide a whole row or column at once.

## Concepts
Index ↔ (row, col) conversion: `row = Math.floor(i / n)`, `col = i % n`. Adjacency checks.
