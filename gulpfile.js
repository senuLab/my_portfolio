var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssdeclsort = require('css-declaration-sorter');
var mqpacker = require('css-mqpacker');
var browserSync  = require('browser-sync');

//gulp.task('sass', function() {
gulp.task('sass', function() {
    console.log('sass compile');
  return gulp.src('./scss/**/*.scss')
    //.pipe(plumber({errorHandler: notify.onError("Error:<%= error.message %>")}))
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([mqpacker()]))
    .pipe(postcss([cssdeclsort({order: 'smacss'})]))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function(done) {
  browserSync.init({
      server: {
          baseDir: './',
          index: 'index.html'
      }
  });
  done();
});

gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});

gulp.task( 'watch',  function(done) {
  gulp.watch( './scss/**/*.scss', gulp.task('sass'));
  gulp.watch( './*.html', gulp.task('bs-reload'));
  gulp.watch( './css/*.css', gulp.task('bs-reload'));
  gulp.watch( './js/*.js', gulp.task('bs-reload'));
  done();
});

gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));