// noStroke();

// var faceSize = 300;
// var mouthSize = 150;
// var eyeSize = 40;
// var x = 200;
// var y = 200;

// // face
// fill(255, 255, 0);
// ellipse(x, y, faceSize, faceSize);

// // eyes
// fill(46, 46, 41);
// ellipse(x - 50, y - 50, eyeSize, eyeSize);
// ellipse(x + 100, y - 60, eyeSize, eyeSize);

// // mouth
// fill(252, 65, 65);
// ellipse(x + 50, y + 40, mouthSize, mouthSize);

noStroke();

var faceSize = 268;
var mouthSize = 1/2 * faceSize;
var eyeSize = 2/15 * faceSize; // 40/300ths -> 4/30 -> 2/15
// https://www.khanacademy.org/math/arithmetic/fractions

var x = 200;
var y = 200;

// face
fill(255, 255, 0);
ellipse(x, y, faceSize, faceSize);

// eyes
fill(46, 46, 41);
ellipse(x - 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize);
ellipse(x + 1/3 * faceSize, y - 1/5 * faceSize, eyeSize, eyeSize);

// mouth
fill(252, 65, 65);
ellipse(x + 1/6 * faceSize, y + 2/15 * faceSize, mouthSize, mouthSize);