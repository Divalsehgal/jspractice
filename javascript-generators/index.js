function* getIdGenerator(initialValue = 0) {
  let id = initialValue;
  while (true) {
    yield id++;
  }
}

const idGenerator = getIdGenerator(10);

console.log(idGenerator.next(3).value); // 0

console.log(idGenerator.next(6).value); // 1
console.log(idGenerator.next().value); // 2
console.log(idGenerator.next().value); // 3
