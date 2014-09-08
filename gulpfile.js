var gulp = require('gulp');
var svg2png = require('gulp-svg2png');

gulp.task('default', function () {
    gulp.src('./svg/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./png'));
});