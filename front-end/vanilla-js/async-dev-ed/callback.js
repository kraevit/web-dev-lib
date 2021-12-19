// undefined

// console.log('Start');

// function loginUser(email, pass) {
//   setTimeout( () => {
//     return { userEmail: email }
//   }, 1500 );
// }

// const user = loginUser('kraevit@gmail.com', 'qwe123');
// console.log(user);

// console.log('Finish');

// Start
// undefined
// Finish

// ============================== //

// Using Callback()
// Callback HELL
// console.log('Start');

// function loginUser(email, pass, callback) {
//   setTimeout( () => {
//     callback( {
//       userEmail: email
//     } );
//   }, 3000 )
// }

// function getUserVideos(email, callback) {
//   setTimeout( () => {
//     callback( [
//       'video1', 'video2', 'video3'
//     ] );
//   }, 2000 );
// }

// function videoDetails(video, callback) {
//   setTimeout( () => {
//     callback( 'Video Title' );
//   }, 1000 );
// }

// Callback HELL
// const user = loginUser('kraevit@gmail.com', 'qwe123', (userData) => {
//   console.log(userData);
//   getUserVideos(userData.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// } );

// console.log('Finish');

// ============================== //

// REFACTOR CODE USING Promise OBJ
// REFACTOR CODE USING Promise OBJ
// REFACTOR CODE USING Promise OBJ
console.log('Start');

function loginUser(email, pass) {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve( {
        userEmail: email
      } );
    }, 3000 )
  } );
}

function getUserVideos(email) {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve( [
        'video1', 'video2', 'video3'
      ] );
    }, 2000 );
  } );
}

function videoDetails(video) {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve( 'Video Title' );
    }, 1000 );
  } );
}

// Callback HELL
// const user = loginUser('kraevit@gmail.com', 'qwe123', (userData) => {
//   console.log(userData);
//   getUserVideos(userData.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// } );

loginUser( 'kraevit@gmail.com', 'qwe123' )
  .then( user => getUserVideos( user.userEmail ) )
  .then( videos => videoDetails( videos[0] ) )
  .then( title => console.log( title ) );

console.log('Finish');