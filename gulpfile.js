'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var cssnano = require('gulp-cssnano');
var concatCss = require('gulp-concat-css');

var staticFiles = [
  'app/**/*.html',
  'app/**/*.jpg',
  'app/**/*.png',
  'app/**/*.ico'
];

var homeCssFiles = [
  'app/css/theme.css',
  'app/css/style.css'
];

var userCssFiles = [
  'app/css/user_panel.css'
];

var danielFiles = [
  'app/js/lib/sort.js',
  'app/js/lib/events.js',
  'app/js/lib/maps.js'
];

var testCssFiles = [
  'app/css/theme.css',
  'app/css/test-style.css'
];

var testJS = [
  'app/js/lib/docs.js',
  'app/js/lib/uikit.min.js',
  'app/js/lib/highlight.js'
];

gulp.task('static:dev', function() {
  gulp.src(staticFiles)
  .pipe(gulp.dest('build/'));
});

gulp.task('daniel:dev', function() {
  gulp.src(danielFiles)
  .pipe(gulp.dest('build/js/'));
});

gulp.task('testJS:dev', function() {
  gulp.src(testJS)
  .pipe(gulp.dest('build/js'));
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

gulp.task('test-css:dev', function() {
  return gulp.src(testCssFiles)
  .pipe(concatCss('test.css'))
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

gulp.task('build', ['webpack:dev', 'static:dev', 'home-css:dev', 'user-css:dev', 'test-css:dev', 'testJS:dev', 'daniel:dev']);
gulp.task('default', ['watch:build']);
