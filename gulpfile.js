'use strict';

const csso = require('gulp-csso');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

// gulp css --cwd common.bundles/main
gulp.task('css', function() {
  return gulp.src(['*.css', '!*.min.css'])
    .pipe(postcss([
      require('postcss-import')(),
      require('postcss-url')(),
      require('autoprefixer')(),
    ]))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});

gulp.task('default', gulp.series('css'));
