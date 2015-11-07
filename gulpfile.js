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
            baseDir: "./dist"
        }
    });
});

// convert from PostCSS to CSS
gulp.task('postcss',  function() {
	var processors = [
			precss
		];
    return gulp.src(['app/css/main.css'])
    	.pipe(plumber())
		.pipe(postcss(processors))
		.pipe(notify('CSS-файлы успешно обновлены'))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('dist/css/'));
});

// javascript
gulp.task('js', function(){
	gulp.src([
		'builds/dev/app/**/*.js'
		])
	.pipe(concat('app.js'))
	.pipe(gulp.dest("builds/dev"))
});

// main bower files
gulp.task('fontsMainBower', function() {
	return gulp.src(mainBowerFiles(['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.otf']))
	    .pipe(gulp.dest('dist/css/fonts'))
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
   	['app/css/*.css', 'app/css/**/*.css', 'builds/dev/app/*.js'], 
	['postcss', 'js'])
   .on("change", browserSync.reload);
});


// default task
gulp.task('default', ['browser-sync', 'postcss', 'js', 'watch']);

// other tasks
gulp.task('update', [ 'mainBower', 'postcss']);
