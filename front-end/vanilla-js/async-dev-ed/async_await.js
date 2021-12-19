// ASYNC AWAIT ;)

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

// loginUser( 'kraevit@gmail.com', 'qwe123' )
//   .then( user => getUserVideos( user.userEmail ) )
//   .then( videos => videoDetails( videos[0] ) )
//   .then( title => console.log( title ) );

// REFACTOR PROMISE TO ASYNC AWAIT

async function displayUser() {
  try {
    const loggedUser = await loginUser('kraevit@gmail.com', 'qwe123');
    const videos = await getUserVideos(loggedUser.userEmail);
    const details = await videoDetails(videos[0]);
    console.log(details);
  }
  catch(err) {
    console.log('we could not get the videos');
  }
}

displayUser();
