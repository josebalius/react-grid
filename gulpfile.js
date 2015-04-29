var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var _ = require('lodash');

gulp.task('babel', function() {
    return gulp.src(['./src/**/*.js'])
        .pipe(babel({
            modules: 'common',
            stage: 0
        }))
        .pipe(gulp.dest('./lib/'));
});

var customOpts = {
    entries: ['./lib/ReactGrid.js'],
    debug: true
};
var opts = _.assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('browserify', ['babel'], bundle);
b.on('update', bundle);

function bundle() {
    return b.bundle()
    .pipe(source('ReactGrid.js'))
    .pipe(gulp.dest('./dist'));
}

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['babel']);
});

gulp.task('default', ['browserify', 'watch']);
