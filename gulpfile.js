var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task("webpack", function() {
    return gulp.src('./src/ReactGrid.js')
        .pipe(webpack({
            output: {
                // Make sure to use [name] or [id] in output.filename
                //  when using multiple entry points
                filename: "ReactGrid.js"
            },
            module: {
                loaders: [
                    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?stage=0"}
                ]
            },
            watch: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['webpack']);