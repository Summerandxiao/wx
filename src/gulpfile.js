
const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');


gulp.task('scss', () => {
gulp.src('./**/*.scss') // 找到sass文件
.pipe(sass()) // css 文件
.pipe(cleanCss()) // 压缩css文件
.pipe(rename((path) => {
path.extname = '.wxss'
}))
.pipe(gulp.dest('./'))
})


gulp.task('watch', () => {
gulp.watch('./pages/**/*.scss', ['scss'])
gulp.watch('gu./components/**/*.scss', ['scss'])
})