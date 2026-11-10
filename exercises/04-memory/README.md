# 04 — Memory Card Game (60 min)

## Spec
- [ ] 4×4 grid of cards (8 pairs: emoji or letters), shuffled with **Fisher–Yates**.
- [ ] Click to flip. When 2 are flipped: if they match, keep them face up; otherwise flip both back after 1 s.
- [ ] **Lock input** while two unmatched cards are showing.
- [ ] Ignore clicks on an already-flipped or matched card.
- [ ] Move counter, timer, win message, restart.
- [ ] Bonus: CSS 3D flip animation (`transform: rotateY(180deg)`, `backface-visibility`).

## Concepts
`setTimeout`, guarding against race conditions (fast double clicks), shuffle algorithms.
