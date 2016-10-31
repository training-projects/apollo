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
  htmlMain           : 'src/html/*.jade',
  cssMain            : 'src/css/main.styl',
  cssPartials        : 'src/css/**/*.styl',
  js                 : 'src/js/**/*.js',
  images             : 'src/images/**/*',
  vendorJquery       : 'src/vendor/jquery/jquery.min.js',
  vendorBootstrapCSS : 'src/vendor/bootstrap/bootstrap.min.css',
  vendorBootstrapJS  : 'src/vendor/bootstrap/bootstrap.min.js'
}

const BUILD_PATH = {
  root   : './',
  css    : './assets/css/',
  js     : './assets/js/',
  images : './assets/images/'
}


// TASKS

// HTML
gulp.task('html', function() {
  gulp.src(SRC_PATH.htmlMain)
      .pipe(plumber())
      .pipe(jade({ pretty: true }))
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

// IMAGES
gulp.task('images', function() {
  gulp.src(SRC_PATH.images)
      .pipe(plumber())
      .pipe(imagemin({
        compress: true,
        interlaced: true,
        optimizatonLevel: 3
      }))
      .pipe(gulp.dest(BUILD_PATH.images));
});

// JQUERY
gulp.task('vendorJquery', function() {
  gulp.src(SRC_PATH.vendorJquery)
      .pipe(plumber())
      .pipe(gulp.dest(BUILD_PATH.js));
});

// BOOTSTRAP CAROUSEL
gulp.task('vendorBootstrap', function() {
  gulp.src(SRC_PATH.vendorBootstrapCSS)
      .pipe(plumber())
      .pipe(gulp.dest(BUILD_PATH.css));

  gulp.src(SRC_PATH.vendorBootstrapJS)
      .pipe(plumber())
      .pipe(gulp.dest(BUILD_PATH.js));
});

// WATCHERS
gulp.task('watch', function() {
  gulp.watch(SRC_PATH.htmlMain,     ['html']);
  gulp.watch(SRC_PATH.cssPartials,  ['css']);
  gulp.watch(SRC_PATH.js,           ['js']);
});

// Browsersync
gulp.task('browser-sync', ['css'], function() {
    browserSync.init({
        server: BUILD_PATH.root,
        notify: false
    });
});

// RUN
gulp.task('default', ['html', 'css', 'js', 'vendorBootstrap', 'watch', 'browser-sync']);
gulp.task('build',   ['html', 'css', 'js', 'images', 'vendorJquery', 'vendorBootstrap']);
gulp.task('no-bs',   ['html', 'css', 'js', 'watch']);
