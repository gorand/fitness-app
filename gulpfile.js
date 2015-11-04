var gulp = require('gulp'),
	jade = require('gulp-jade'),
	postcss = require('gulp-postcss'),
	precss = require('precss'),
	colorFunction = require("postcss-color-function"),	
	browserSync = require('browser-sync').create(),
 	mainBowerFiles = require('main-bower-files'),
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

// convert from Jade to HTML
gulp.task('template', function(){
	gulp.src('app/templates/pages/*.jade')
		.pipe(jade({
			pretty: true
		}))	
		.pipe(gulp.dest('dist'))
});

// convert from PostCSS to CSS
gulp.task('postcss',  function() {
	var processors = [
			precss,
			colorFunction
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
	gulp.src("app/js/main.js")
	.pipe(gulp.dest("dist/js/"))
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

// image optimization
gulp.task('image', function() {
     gulp.src('dist/img/*')
       .pipe(gulp.dest('raw/images'))
       .pipe(imagemin({
       		progressive: true,
       		use: [pngquant()]
       }))
       .pipe(gulp.dest('dist/img'));
 });

// convert from HTML to Jade
 gulp.task('convert', function(){
 	gulp.src('raw/builder/html/*.html')
 		.pipe(html2jade())
		.pipe(notify('Шаблоны .jade обновлены'))
 		.pipe(gulp.dest('raw/builder/jade'));
 });


gulp.task('watch', function() {
   gulp.watch(['app/css/*.css', 'app/css/**/*.css', 'app/templates/*.jade', 'app/templates/**/*.jade'], ['postcss', 'template']).on("change", browserSync.reload);
});

gulp.task('convert', function(){
	gulp.src('raw/builder/html/*.html')
		.pipe(html2jade())
	.pipe(notify('Шаблоны .jade обновлены'))
		.pipe(gulp.dest('raw/builder/jade'));
});

gulp.task('fonts', function(){
	gulp.src("app/icons/*.svg")
	.pipe(iconfont({
	  fontName: 'iconproject',
	  appendCodepoints: true  
	}))
	.on('codepoints', function(codepoints, options){
		console.log(codepoints, options);
	})
	.pipe(gulp.dest("dist/fonts/iconproject"))
});

// include fonts
gulp.task('tofonts1', function(){
	gulp.src("bower_components/fontawesome/fonts/*")
	.pipe(gulp.dest("dist/fonts/fontawesome"))
});
gulp.task('tofonts2', function(){
	gulp.src("bower_components/roboto-fontface/fonts/*")
	.pipe(gulp.dest("dist/fonts/roboto-fontface"))
});

// default task
gulp.task('default', ['browser-sync', 'postcss', 'template', 'js', 'watch']);

// other tasks
gulp.task('update', [ 'mainBower', 'postcss', 'template', 'fonts']);
