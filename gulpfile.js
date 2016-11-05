let gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('livereload', () => {
    gulp.src('public/**/*.*').pipe(livereload());
});

gulp.task('default', () => {
    livereload.listen();
    gulp.watch('**/*.*', ['livereload']);
});

