'use strict';
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const { less, watch } = require('gulp');
const gulpless = require('gulp-less');



exports.less = function () {
    return gulp.src('./src/css/style.less')
        .pipe(gulpless())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.watch =  function () {
    gulp.watch('./src/css/*.less', gulp.series('less'));
};