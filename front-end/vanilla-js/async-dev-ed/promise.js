// Promise()

// const promise = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     resolve( {user: "dev"} );
//     // reject(new Error('User login failed!'));
//   }, 2000 );
// } );

// promise
//   .then(user => console.log(user))
//   .catch(err => console.log(err.message));

// Promise.all()

const yt = new Promise( (resolve) => {
  setTimeout( () => {
    console.log('getting stuff from youtube');
    resolve( { videos: [1,2,3,4,5] } );
  }, 2000 )
} );

const fb = new Promise( (resolve) => {
  setTimeout( () => {
    console.log('getting stuff from facebook');
    resolve( { user: 'Name' } );
  }, 2000 )
} );

Promise.all( [yt, fb] )
  .then( (result) => console.log( result ) );
