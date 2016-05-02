'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var cssNano = require('gulp-cssnano');
var concatCss = require('gulp-concat-css');
var maps = require('gulp-sourcemaps');

var staticFiles = [
  'app/**/*.html',
  'app/**/*.mp3',
  'app/**/*.jpg',
  'app/**/*.png',
  'app/**/*.jpeg',
  'app/**/*.ico'
];

gulp.task('static:dev', function() {
  gulp.src(staticFiles)
  .pipe(gulp.dest('build/'));
});

gulp.task('css:dev', function(){
  return gulp.src([
    'app/css/theme.css',
    'app/css/style.css',
    'angular-google-autocomplete.css'
  ])
  .pipe(concatCss('main.css'))
  .pipe(cssNano())
  .pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('watch:build', function() {
  gulp.watch(staticFiles, ['static:dev']);
  gulp.watch('app/**/*.css', ['css:dev']);
  gulp.watch('app/**/*.sass', ['sass:dev']);
  gulp.watch('app/**/*.js', ['webpack:dev']);
});

gulp.task('watch', ['watch:build']);
gulp.task('build', ['webpack:dev', 'static:dev', 'css:dev']);
gulp.task('default', ['build']);
