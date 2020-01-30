const gulp = require('gulp');
const concat = require('gulp-concat');
const ugly = require('gulp-uglify');
const clean = require('gulp-clean');
const minifyCSS = require('gulp-csso');

let scritpTask = () => gulp.src('./src/scripts/*.js')
    .pipe(concat('index.js'))
    // .pipe(ugly())
    .pipe(gulp.dest('./dist'));

let htmlTask = () => gulp.src('./src/html/*.html')
    .pipe(gulp.dest('./dist'));

let appTask = () => gulp.src('./src/heroku-deploy/*.js')
    .pipe(gulp.dest('./'));

let procTask = () => gulp.src('./src/heroku-deploy/procfile')
    .pipe(gulp.dest('./'));


let cssTask = () => gulp.src('./src/styles/index.css', { allowEmpty: true })
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist'));

let dataTask = () => gulp.src('./src/data/*.json')
    .pipe(gulp.dest('./dist/data'));

let removeTask = () => gulp.src('./dist', { read: false, allowEmpty: true })
    .pipe(clean());



gulp.task('script', scritpTask);
gulp.task('html', htmlTask);
gulp.task('css', cssTask);
gulp.task('data', dataTask);
gulp.task('del', removeTask);
gulp.task ('app', appTask)
gulp.task ('proc', procTask);

gulp.task('build', gulp.series('del', 'script', 'html', 'app', 'proc', 'css', 'data'));
