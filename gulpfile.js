var gulp = require('gulp');
var typescript = require('gulp-typescript');
var pug = require('gulp-pug');
var less = require('gulp-less');
var path = require('path');
var srcPath = path.join(__dirname, '/src');
var buildPath = path.join(__dirname, '/build');
var nodePath = path.join(__dirname, '/node_modules');



gulp.task('buildTypescript', function () {
    return gulp
        .src(path.join(srcPath, '/**/*.ts'))
        .pipe(typescript())
        .pipe(gulp.dest(buildPath));
});


gulp.task('buildPug', function () {
    return gulp
        .src(path.join(srcPath, '/**/*.pug'))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(buildPath));
});

gulp.task('buildLess', function () {
    return gulp
        .src([
            path.join(srcPath, '/**/*.less'),
            '!'+ path.join(srcPath, '/**/*variables.less'),
        ])
        .pipe(less())
        .pipe(gulp.dest(buildPath));
});


gulp.task('buildCopyVendors', function () {
    return gulp
        .src([
            path.join(nodePath, '/angular*/angular*.js'),
            '!' + path.join(nodePath, '/**/*.min.js'),
        ])
        .pipe(gulp.dest(
            path.join(buildPath, '/vendor')
        ));
});



gulp.task('build', [
    'buildTypescript', 'buildPug', 'buildLess', 
    'buildCopyVendors'
]);