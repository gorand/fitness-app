'use strict';
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    precss = require('precss'),
    browserSync = require('browser-sync').create(),
    mainBowerFiles = require('main-bower-files'),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');

// runing a webserver
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./builds/dev"
        }
    });
});

// convert from PostCSS to CSS
gulp.task('postcss',  function() {
    gulp.src(['builds/dev/app/main.css'])
        .pipe(plumber())
        .pipe(postcss([precss]))
        .pipe(notify('CSS-файлы успешно обновлены'))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('builds/dev'));
    gulp.src([
            'bower_components/angular-bootstrap/ui-bootstrap-csp.css',
            'bower_components/bootstrap/dist/css/bootstrap.css'
        ])
        .pipe(concat('theme.css'))
        .pipe(gulp.dest('builds/dev'));
});

// javascript
gulp.task('js', function(){
    gulp.src([
            'builds/dev/app/**/*.js',
            '!builds/dev/app/**/*_test.js'
        ])
        .pipe(notify('JS-файлы успешно обновлены'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest("builds/dev"));
    gulp.src([
            'bower_components/angular/angular.js',
            // 'bower_components/angular-route/angular-route.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/firebase/firebase.js',
            'bower_components/angularfire/dist/angularfire.js'
        ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('builds/dev'))
});

// main bower files
gulp.task('fontsMainBower', function() {
    return gulp.src(mainBowerFiles(['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.otf']))
        .pipe(gulp.dest('builds/dev/fonts'))
});
gulp.task('cssMainBower', function() {
    return gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest('app/css/vendor'))
});
gulp.task('jsMainBower', function() {
    return gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest('dist/js/vendor'))
});
gulp.task('allMainBower',['fontsMainBower', 'cssMainBower', 'jsMainBower']);


gulp.task('watch', function() {
   gulp.watch(
    [
        'builds/dev/app/*.html',
        'builds/dev/app/css/*.css',
        'builds/dev/app/css/**/*.css',
        'builds/dev/app/**/*.js'
    ], 
    ['postcss', 'js'])
   .on("change", browserSync.reload);
});


// default task
gulp.task('default', ['browser-sync', 'postcss', 'js', 'watch']);

// other tasks
gulp.task('update', [ 'mainBower', 'postcss']);
