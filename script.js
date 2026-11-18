// For loop experiments

const output = document.querySelector("#output");

function log(label, value) {
  console.log(label, value);
  const line = document.createElement("p");
  line.className = "log-line";
  line.textContent = `${label}: ${value}`;
  output.appendChild(line);
}

// 1. Basic counting loop
const counts = [];
for (let i = 1; i <= 5; i++) {
  counts.push(i);
}
log("Basic count 1..5", counts.join(", "));

// 2. Sum of numbers 1..10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
log("Sum 1..10", sum);

// 3. Loop over an array
const fruits = ["apple", "banana", "cherry"];
const labelled = [];
for (let i = 0; i < fruits.length; i++) {
  labelled.push(`${i}: ${fruits[i]}`);
}
log("Fruits with index", labelled.join(" | "));

// 4. Only even numbers (continue) and stop at 8 (break)
const evens = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue;
  if (i > 8) break;
  evens.push(i);
}
log("Even numbers, stop after 8", evens.join(", "));

// 5. Nested loop: multiplication table 3x3
const table = [];
for (let row = 1; row <= 3; row++) {
  const cells = [];
  for (let col = 1; col <= 3; col++) {
    cells.push(row * col);
  }
  table.push(cells.join(" "));
}
log("3x3 multiplication table", table.join(" / "));

// 6. Countdown loop (counting backwards)
const countdown = [];
for (let i = 5; i >= 1; i--) {
  countdown.push(i);
}
log("Countdown", countdown.join(", ") + ", liftoff!");

// 7. Same array, for...of variant for comparison
const upper = [];
for (const fruit of fruits) {
  upper.push(fruit.toUpperCase());
}
log("fruits via for...of, uppercased", upper.join(", "));
