// Prototypes - WE USE PROTOTYPES to Attach single function to an Object, otherwise if we have 1000000 instances of the object
// we will also have 1000000 copies of the same function wich is not we want!!!!!! ( Too much memory consumption :) )

function Car(id) {
	this.carId = id;
}

Car.prototype.start = function() {
	console.log( 'start: ' + this.carId );
};

let car = new Car(101);
car.start(); // output: start: 123

// Expanding Objects ( String.prototype )
String.prototype.hello = function() {
	return this.toString() + ' Hello';
};

console.log( 'foo'.hello() ); // foo Hello
