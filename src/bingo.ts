function getRandomInt(min: number, max: number, exclusions: number[]) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const possibleValues = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  const availableValues = possibleValues.filter(value => !exclusions.includes(value));
  if (availableValues.length === 0) {
    throw new Error('No available values in the specified range after exclusions.');
  }
  const randomIndex = Math.floor(Math.random() * availableValues.length);
  return availableValues[randomIndex];
}

const cartelas: number[][] = [];

for(let i = 1; i <= 50; i++) {
  const cartela: number[] = [];
  cartela.push(getRandomInt(1,10,cartela));
  cartela.push(getRandomInt(1,10,cartela));
  cartela.push(getRandomInt(1,10,cartela));

  cartela.push(getRandomInt(11,20,cartela));
  cartela.push(getRandomInt(11,20,cartela));
  cartela.push(getRandomInt(11,20,cartela));

  cartela.push(getRandomInt(21,30,cartela));
  cartela.push(getRandomInt(21,30,cartela));

  cartela.push(getRandomInt(31,40,cartela));
  cartela.push(getRandomInt(31,40,cartela));
  cartela.push(getRandomInt(31,40,cartela));

  cartela.push(getRandomInt(41,50,cartela));
  cartela.push(getRandomInt(41,50,cartela));
  cartela.push(getRandomInt(41,50,cartela));

  console.log(`cartela ${i}:`);
  console.table(cartela);
  cartelas.push(cartela);
}
