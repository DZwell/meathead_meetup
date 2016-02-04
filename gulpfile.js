'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var cssnano = require('gulp-cssnano');
var concatCss = require('gulp-concat-css');

var staticFiles = [
    'app/**/*.html',
    'app/**/*.jpg',
    'app/**/*.png'
];

var homeCssFiles = [
    'app/css/theme.css',
    'app/css/style.css'
];

var userCssFiles = [
  'app/css/user_panel.css'
];


gulp.task('static:dev', function() {
  gulp.src(staticFiles)
  .pipe(gulp.dest('build/'));
});

gulp.task('home-css:dev', function(){
  return gulp.src(homeCssFiles)
  .pipe(concatCss('home.css'))
  .pipe(cssnano())
  .pipe(gulp.dest('build/css/'));
});

gulp.task('user-css:dev', function() {
  return gulp.src(userCssFiles)
  .pipe(concatCss('user.css'))
  .pipe(cssnano())
  .pipe(gulp.dest('build/css/'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/js/'));
});

gulp.task('watch:build', function() {
  gulp.watch(staticFiles, ['static:dev']);
  gulp.watch(homeCssFiles, ['home-css:dev']); // possible change to something that includes ALL CSS
  gulp.watch(userCssFiles, ['user-css:dev']);
  gulp.watch('app/**/*.js', ['webpack:dev']);
});

gulp.task('watch:check', function() {
  gulp.watch(appFiles, ['mocha'])
})

gulp.task('build', ['webpack:dev', 'static:dev', 'home-css:dev', 'user-css:dev']);
gulp.task('default', ['watch:build']);
