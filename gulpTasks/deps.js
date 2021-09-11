const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')

function depsCss() {
  return gulp.src(['node_modules/font-awesome/scss/font-awesome.scss','node_modules/bootstrap/scss/bootstrap.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifycss({"uglyComments": false}))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('build/assets/css'))
}

function depsJs() {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('build/assets/js'))
}

function depsFonts() {
  return gulp.src('node_modules/font-awesome/fonts/*.*')
  .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
  depsCss,
  depsJs,
  depsFonts
}