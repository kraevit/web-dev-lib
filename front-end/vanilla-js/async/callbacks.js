(function IIFE(){

  'use strict';

  // callbacks

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

  function createPost( post, callback ){
    setTimeout(() => {
      posts.push( post );
      callback();
    }, 2000);
  }

  // getPosts();

  // createPost({ title: 'Post Three', body: 'This is post three' });

  createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
  
})(); 