// 引用 gulp plugin
var gulp = require('gulp'); //載入 gulp
var gulpUglify = require('gulp-uglify'); //載入 gulp-uglify
var gulpSass = require('gulp-sass');    // 載入 gulp-sass

// 定義名稱為 default 的 gulp 工作
gulp.task('default', [ 'script','styles']);

// 定義名稱為 other 的 gulp 工作
gulp.task('other', function () {
    console.log('Hello Gulp Other Task');
});

gulp.task('script', function () {
    gulp.src('src/js/*.js')        // 指定要處理的原始 JavaScript 檔案目錄
        .pipe(gulpUglify())                     // 將 JavaScript 做最小化
        .pipe(gulp.dest('src/minify'));  // 指定最小化後的 JavaScript 檔案目錄
});

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['script']);
    gulp.watch('src/sass/*.sass', ['styles']);
});

gulp.task('styles', function () {
    gulp.src('src/sass/*.sass')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass({          // 編譯 Scss
            outputStyle: 'compressed'
        }))         // 編譯 Scss
        .pipe(gulp.dest('src/css'));  // 指定編譯後的 css 檔案目錄
});
