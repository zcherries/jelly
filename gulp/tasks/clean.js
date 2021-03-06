var gulp = require('gulp');
var del = require('del');
var paths = require('../configs/shim/path-builder');

gulp.task('clean:styles', function (done) {
  del(paths.dist + 'styles/').then(function () {
    done();
  });
});

gulp.task('clean:scripts', function (done) {
  del(paths.dist + 'scripts/').then(function () {
    done();
  });
});

gulp.task('clean:htmls', function (done) {
  del(paths.dist + '**/*.html').then(function () {
    done();
  });
});

