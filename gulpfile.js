// -----------------------------------------------------------------------------
// My Precious
// -----------------------------------------------------------------------------


// RUNNERS (PLUGINS)
var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    browserSync  = require('browser-sync'),
    jade         = require('gulp-jade'),
    sourcemaps   = require('gulp-sourcemaps'),
    stylus       = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    uglify       = require('gulp-uglify'),
    imagemin     = require('gulp-imagemin');


// PATHS
const SRC_PATH = {
  htmlMain:     'src/html/*.jade',
  cssMain:      'src/css/main.styl',
  cssPartials:  'src/css/**/*.styl',
  js:           'src/js/**/*.js',
  images:       'src/images/**/*'
}

const BUILD_PATH = {
  root:   './',
  css:    './assets/css/',
  js:     './assets/js/',
  images: './assets/images/'
}


// TASKS

// HTML
gulp.task('html', function() {
  gulp.src(SRC_PATH.htmlMain)
      .pipe(plumber())
      .pipe(jade({ pretty: false }))
      .pipe(gulp.dest(BUILD_PATH.root));
});

// CSS
gulp.task('css', function() {
  gulp.src(SRC_PATH.cssMain)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(stylus({
        compress: true,
        use: autoprefixer({ browsers: ['last 2 versions'] })
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(BUILD_PATH.css));
});


// JAVASCRIPT
gulp.task('js', function() {
  gulp.src(SRC_PATH.js)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(BUILD_PATH.js));
});
