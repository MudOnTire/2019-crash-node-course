const fs = require('fs');
const path = require('path');

/**
 * create folder
 */
(
  function () {
    const folderPath = path.join(__dirname, 'test');
    fs.exists(folderPath, (exists) => {
      if (!exists) {
        fs.mkdir(path.join(__dirname, 'test'), (err) => {
          if (err) throw err;
          console.log('Folder created...');
        });
      }
    })
  }
)();

/**
 * create and write to file
 */
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'hello world', (err) => {
  if (err) throw err;
  console.log('File written to...');
});

/**
 * read file
 */
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

/**
 * rename file
 */
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), (err) => {
  if (err) throw err;
  console.log('file renamed...');
});

