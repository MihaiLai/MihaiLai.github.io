var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css');
    htmlminify = require("gulp-html-minify");
    minify = require('gulp-minify');

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/'))
})

gulp.task('minHtml' , function(){
    return gulp.src("index.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("build/"))
});

gulp.task('minjs', function() {
  gulp.src('js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('build/'))
});