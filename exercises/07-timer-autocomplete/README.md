# 07 — Stopwatch + Autocomplete (60 min total)

## Part A — Stopwatch
- [ ] Start / Pause / Reset, display `mm:ss.cs`.
- [ ] Laps list.
- [ ] Tip: don't count ticks. Store the start time and compute elapsed time with `Date.now()` (intervals drift).

## Part B — Autocomplete search
- [ ] Input that searches as you type, e.g. `https://restcountries.com/v3.1/name/{query}`
  or filter a local array of 200 words.
- [ ] **Debounce** the input (300 ms). Write your own `debounce(fn, ms)`.
- [ ] Show results in a dropdown, with keyboard navigation (↑ ↓ Enter, Esc).
- [ ] Handle the loading, empty, and error states.
- [ ] Bonus: highlight the matching part of each result.

## Concepts
`setInterval` / `clearInterval`, closures (debounce), `fetch` + `async/await` + `try/catch`, keyboard events.
