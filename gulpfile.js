'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('src/public/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});