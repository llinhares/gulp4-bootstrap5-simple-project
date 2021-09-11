const gulp = require('gulp')
const {series, parallel} = require('gulp')

const {appHtml, appCss, appJs, appImg} = require('./gulpTasks/app')
const {depsCss, depsJs, depsFonts} = require('./gulpTasks/deps')
const {server, watchFiles} = require('./gulpTasks/server')

module.exports.default = series(
  parallel(
      series(appHtml, appCss, appJs, appImg),
      series(depsCss, depsJs, depsFonts)
  ),
  server,
  watchFiles
)

module.exports.build = series(
  parallel(
      series(appHtml, appCss, appJs, appImg),
      series(depsCss, depsJs, depsFonts)
  )
)