/* Required packages */
var gulp = require('gulp');
var sass = require('gulp-sass');

/* File sources */
const sass_src = './sass/**/*scss';
const css_output = './src/css';

/* Style Task */
gulp.task('styles', function () {
	return gulp.src(sass_src)
	//	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // for prod
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(css_output));
});

/* Watch task */
gulp.task('watch', function () {
	gulp.watch(sass_src, ['styles']); // CSS changes
});

/* Default task */
gulp.task('default', [
	'styles'
]);