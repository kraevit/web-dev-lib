// Convert to JSON
let car = {
  id: 123,
  style: 'convertible'
};

console.log( JSON.stringify(car) );  // {"id": 123, "style": "convertible"}

// Convert Array to JSON
let carIds = [
  { carId: 123 },
  { carId: 456 },
  { carId: 789 }
];

console.log( JSON.stringify(carIds) ); // [{"carId":123},{"carId":456},{"carId":789}]

// Parsing JSON
let jsonIn = `[{"carId":123},{"carId":456},{"carId":789}]`;

let carIds = JSON.parse(jsonIn);
console.log( carIds );
