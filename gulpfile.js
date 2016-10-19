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
