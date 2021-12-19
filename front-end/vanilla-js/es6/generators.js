// Generators

function *proccess() {
  yield: 7000;
  yield: 7001;
}

let it = proccess(); // return value = iterator!!!!
console.log(it.next());
console.log(it.next());

// ========================
function *processLoop() {

  let nextId=8000;
  while(true) {
    yield(nextId++);
  }
}

console.log(it.next().value);
console.log(it.next().value);