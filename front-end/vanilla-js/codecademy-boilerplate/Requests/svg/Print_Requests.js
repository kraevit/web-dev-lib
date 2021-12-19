// XMLHttpRequest GET

// creates new object
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call/endpoint';

// handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		// Code to execute with response
	}
}

// opens request and sends object
xhr.open('GET', url);
xhr.send();

// XMLHttpRequest POST

// creates new object
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call/endpoint';
const data = JSON.stringify({id: '200'}); // converts data to a string

// handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
	if (xhr.readyState = XMLHttpRequest.DONE) {
		// Code to execute with response
	}
}

// opens request and send object
xhr.open('POST', url);
xhr.send();

// Fetch GET

fetch('http://api-to-call/endpoint').then(response => { // sends request
	if (response.ok) {
		return response.json(); // converts response object to JSON
	}
	throw new Error('Request failed!'); // handles errors
}, networkError => console.log(networkError.message) // handles errors
).then(jsonResponse => { // handles success
	// Code to Execute with jsonResponse
});

// Fetch POST

fetch('http://api-to-call/endpoint', { // sends request
	method: 'POST',
	body: JSON.stringify({id: '200'})
}).then(response => { // send request
	if (response.ok) {
		return response.json(); // converts response object to JSON
	}
	throw new Error('Request failed!'); // handles errors
}, networkError => console.log(networkError.message) // handles errors
).then(jsonResponse => { // handles success
	// Code to Execute with jsonResponse
});






// async await GET

async function getData() {
	try {
		const response = await fetch('http://api-to-call/endpoint'); // sends request
		// handles response if success
		if (response.ok) {
			const jsonResponse = await response.json();
			// Code to execute with jsonResponse
		}
	}
	// handles response if unsuccessful
	throw new Error('Request failed!');
	catch(error) {
		console.log(error);
	}
}

// async await POST

async function getData() {
	try {
		const response = await fetch('http://api-to-call/endpoint', { // sends request
			method: 'POST',
			body: JSON.stringify({id: '200'})
		}); 
		// handles response if success
		if (response.ok) {
			const jsonResponse = await response.json();
			// Code to execute with jsonResponse
		}
	}
	// handles response if unsuccessful
	throw new Error('Request failed!');
	catch(error) {
		console.log(error);
	}
}

