const path = require('path');

// base file name
console.log(path.basename(__filename)); // path_demo.js

// directory name
console.log(path.dirname(__filename)); // only path without base file name

// file extension
console.log(path.extname(__filename)); // .js

// create path object
console.log(path.parse(__filename));

// concatenate path
// ./test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
