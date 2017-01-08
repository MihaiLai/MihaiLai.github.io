var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    minifyCSS = require('gulp-minify-css');
    htmlminify = require("gulp-html-minify");

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/'))
})

gulp.task('inlineCss', function() {
    return gulp.src('index.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
});

gulp.task('minHtml' , function(){
    return gulp.src("index.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("build/"))
});