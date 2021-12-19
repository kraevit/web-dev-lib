// Iterators

let ids = [9000, 9001, 9002];
console.log(typeof ids[Symbol.iterator]);

// ===========================

let it = ids[Symbol.iterator]();
console.log(it.next());

// =========================== Custom Build Iterators

let idMaker = {
  [Symbol].iterator() {
    let nextId = 8000;
    return {
      next() {
        return {
          value: nextId++,
          done: false
        };
      }
    };
  }
}

let it1 = idMaker[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next().value);

// =========================== 
for (let v of idMaker) {
  if (v > 8002) break;
  console.log(v);
}
