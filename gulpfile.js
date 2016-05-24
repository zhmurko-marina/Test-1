var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

var paths = {
    styles: {
        src: 'assets/sass',
        files: 'assets/sass/*.sass',
        dest: 'assets/css'
    }
};

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    }
  })
});

gulp.task('minify', function() {
  return gulp.src('assets/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''))
});

gulp.task('sass',function (){
    gulp.src(paths.styles.files)
	.pipe(sass())
    .pipe(prefix(
        'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
    ))
    .pipe(gulp.dest(paths.styles.dest))
	.pipe(rename({
		suffix: '.min'
	}))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
	.pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('default', ['browserSync','sass'], function() {
    gulp.watch(paths.styles.files, ['sass']);
    gulp.watch('**/*.html', browserSync.reload);
	gulp.watch('assets/js/**/*.js', browserSync.reload);
});