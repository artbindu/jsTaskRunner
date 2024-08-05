1. 'Gulp Install Globally'
- `npm install --global gulp-cli`
2. Install gulp package
- `npm install --save-dev gulp`
3. Gulp Public Task
```js
function publicTask_Console(cb) {
    console.log('Execute Gulp Public Task');
    cb();
}
  
exports.publicTask = publicTask_Console;
```
- run: `gulp publicTask`

1. Gulp Private Task
```js
const { series, parallel } = require("gulp");
function privateTask_build(cb) {
    console.log('privateTask_build');
    cb();
}
function privateTask_Clean(cb) {
    console.log('privateTask_Clean');
    cb();
}
function privateTask_jsBundle(cb) {
    console.log('privateTask_jsBundle');
    cb();
}
function privateTask_cssBundle(cb) {
    console.log('privateTask_cssBundle');
    cb();
}

exports.privateTask_Series = series(privateTask_Clean, privateTask_build);
exports.privateTask_parallel = parallel(privateTask_jsBundle, privateTask_cssBundle);
// alternative
exports.privateTasks = series(privateTask_Clean, parallel(privateTask_jsBundle, privateTask_cssBundle));
```
- run: `gulp privateTask_Series`, `gulp privateTask_parallel`
  or `gulp privateTasks`











==========================================

### Vinyl: 
Vinyl is a metadata object that provides a way to describe a file, a way to access these files is needed.

### Globs:
A glob is a string of literal and/or wildcard characters, like *, **, or !, used to match filepaths. Globbing is the act of locating files on a file system using one or more globs.

### Gulp APIs
- src(): Creates a stream for reading 
