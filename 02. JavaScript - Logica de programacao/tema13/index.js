// Break e Continue - para While e For

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
while (i < numeros.length) {
  console.log(i);
  if (i > 5) {
    break; // pára o ciclo
  }
  i++;
  if ((i === 2) | (i === 4)) {
    continue; // salta o ciclo ( no caso printa o true)
  }
  console.log(true);
}

for (let i of numeros) {
  if (i > 8) {
    break;
  }
  if (i === 2 || i === 3) {
    continue;
  }
  if (i % 2 === 0) {
    console.log("PAR", i);
    continue;
  }
  console.log("IMPAR", i);
}
