let gulp = require('gulp');
let sass = require('gulp-sass');
let connect = require('gulp-connect');
let babel = require('gulp-babel');

let paths = {
	js: 'src/js/*.js',
	css: 'src/css/*.scss',
	html: 'src/*.html'
}

//HTML
gulp.task('html', () => {
	gulp.src(paths.html)
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
});

gulp.task('html:watch', ['html'], () => {
	gulp.watch(paths.html, ['html']);
});

//CSS
gulp.task('sass', () => {
	gulp.src(paths.css)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
});

gulp.task('sass:watch', ['sass'], () => {
	gulp.watch(paths.css, ['sass']);
});

//JS
gulp.task('js', () => {
	gulp.src(paths.js)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
});

gulp.task('js:watch', ['js'], () => {
	gulp.watch(paths.js, ['js']);
});

//RELOAD
gulp.task('connect', () => {
	connect.server({
		root: './dist',
		livereload: true
	});
});

//BUILD AND WATCH
gulp.task('build', ['html:watch', 'sass:watch', 'js:watch']);

gulp.task('default', ['build', 'connect']);
