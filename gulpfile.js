var gulp        = require('gulp')
  , browserSync = require('browser-sync')
  , uglify      = require('gulp-uglify')
  , rename      = require('gulp-rename')
  , harp        = require('harp');

gulp.task('harp', function(){

    harp.server(__dirname, {
        port: 9000
      }, function() {
        browserSync({
          proxy: 'localhost:9000'
        , open: true
        , port: 9000
        })
    });
});

gulp.task('script', function(){
    return gulp.src("public/script/app.js")
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/script/'));
});

gulp.task('watch', function(){

    gulp.watch('public/css/**/*.styl', function() {
        browserSync.reload('main.css', { stream: true });
    });

    gulp.watch('public/**/*.jade', function(){
        browserSync.reload();
    })

    gulp.watch('public/script/*.js', ['script'], function(){
        browserSync.reload('app.min.js');
    })
})

gulp.task('default', ['harp','script', 'watch']);
