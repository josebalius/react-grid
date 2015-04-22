var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

gulp.task('babel', function() {
    return gulp.src(['./src/**/*.js'])
        .pipe(babel({
            modules: 'common'
        }))
        .pipe(gulp.dest('./lib/'));
});

gulp.task('browserify', ['babel'], function() {
    // Single entry point to browserify
    gulp.src('./lib/ReactGrid.js')
        .pipe(browserify({
            ignore: ['react']
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);