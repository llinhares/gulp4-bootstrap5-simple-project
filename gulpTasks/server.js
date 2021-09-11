const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function server() {
  return gulp.src('build')
  .pipe(webserver({
    port: 8080,
    open: true,
    livereload: true,
  }))
}

function watchFiles(cb) {
  watch('src/**/*.html', () => gulp.series('appHtml')())
  watch('src/**/*.scss', () => gulp.series('appCss')())
  watch('src/**/*.js', () => gulp.series('appJs')())
  watch('src/assets/imgs/**/*.*', () => gulp.series('appImg')())
  return cb()
}

module.exports = {
  server,
  watchFiles
}