/* Symbol: 
  "A symbol is a unique and immutable data type and may be
  used as an identifier for object properties." - Mozilla Developer Network */

let article = {
  title: "Three six mafia",
  [Symbol.for("article")]: "My Article"
}

let value = article[Symbol.for("article")];

console.log(value);
console.log( Object.getOwnPropertyNames(article) ); // ['title'] only
console.log( Object.getOwnPropertySymbols(article) ); // [Symbol(article)]
