var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var sassFiles = './app/scss/**/*.scss';
var cssDest = './app/css';

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './app'
		}
	});
});

gulp.task('sass', function() {
	gulp.src(sassFiles)
		.pipe(sass().on('error', sass.logError)) // using gulp-sass
		.pipe(gulp.dest(cssDest))
		.pipe(browserSync.reload({
			stream:true
		}));
});

gulp.task('default', ['browserSync', 'sass'], function() {
	gulp.watch(sassFiles, ['sass']);
	gulp.watch('./app/*.html', browserSync.reload);
	gulp.watch('./app/js/**/*.js', browserSync.reload); 
});

