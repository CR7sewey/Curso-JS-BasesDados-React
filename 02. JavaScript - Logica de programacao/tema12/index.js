// While e Do While

let i = 0;
while (true) {
  i++;
  if (i > 10) {
    console.log("UIIII", i);
    break;
  }
  if (i % 2 === 0) {
    console.log("PAR", i);
    continue;
  }
  console.log("EU SOU IMPAR!", i);
}

// Laço Infinito
while (true) {
  console.log(i++);
}

////////////////////////////////////

function generate(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//let h = (min,max) => Math.random()*(max-min)+min;
let h = generate(0, 50);
while (h < 45) {
  console.log(h);
  h = generate(20, 50);
}
console.log(h);

// Do While
let j = 0;
do {
  j++;
} while (j <= 10);
console.log(j);
