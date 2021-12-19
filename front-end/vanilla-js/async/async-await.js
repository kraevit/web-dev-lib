(function IIFE(){

  'use strict';

  // async / await

  const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
  ];

  // note! mimic server requests with setTimeout

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

  // async / await
  async function init() { // use async in case you want to use await inside
    await createPost({ title: 'Post Three', body: 'This is post three'}); // waith to be done first
    getPosts(); // then run this

  }

  init(); // invoke init function

})();