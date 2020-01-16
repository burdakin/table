var gulp = require('gulp');
var concat = require('gulp-concat');
var ugly = require('gulp-uglify');

const jsArray = [
    './src/table.js',
    './src/test.js'
]

function scritpTask () {
    return gulp.src(jsArray)
        .pipe(concat('tableScript.js'))
        .pipe(ugly())
        .pipe(gulp.dest('./build/js'))
}

gulp.task('script', scritpTask)