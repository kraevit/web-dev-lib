(function IIFE(){

  'use strict';

  // promises

  const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
  ];

  function getPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach(( post ) => {
        output+= `<p>${post.title}</p>`;
      });
      document.getElementById('output').innerHTML = output;
    }, 1000);
  }

  function createPost( post ) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push( post );
        const error = true;
        if (error) // !error
        {
          resolve();
        }
        else
        {
          reject( 'Error: Something went wrong...');
        }
      }, 2000);
    });
  }

  // createPost({ title: 'Post Three', body: 'This is post three'})
  //   .then( getPosts )
  //   .catch( err => console.log( err ));

  // if multiple promises insteal of .then .then .then
  // use Promise.all
  
  const promise1 = Promise.resolve( 'Hello world!' );
  const promise2 = 10;
  const promise3 = new Promise((resolve, reject) => setTimeout( resolve, 2000, 'Good Bye!' )); 

  Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

})();