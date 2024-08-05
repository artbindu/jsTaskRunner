const fs = require('fs');

// async/await function
async function getVersion() {
  const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(version);
  await Promise.resolve(version);
}
// exports.default = getVersion;


var gulp = require('gulp');
var clean = require('gulp-clean');
gulp.task('clean', function () {
    return gulp.src(['build', 'dist'], {read: false})
        .pipe(clean());
});

const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('build', function() {
  return src('src/**/*.js')
    .pipe(babel())
    .pipe(dest('dist/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.js' }))
    .pipe(dest('build/'));
});

var webserver = require('gulp-webserver');
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(webserver({
      // host: 'localhost',
      port: 8008,
      path: '../public/index.html',
      // livereload: true,
      // directoryListing: true,
      open: true
    }));
});

exports.gulp_build = gulp.series('clean', 'build', 'webserver');

// --------------------------------------------------------

