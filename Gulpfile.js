var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    jshint  = require('gulp-jshint'),
    notify  = require('gulp-notify'),
    nodemon = require('gulp-nodemon'),
    refresh = require('gulp-livereload'),
    client  = require('tiny-lr')(),
    plumber = require('gulp-plumber'),
    csslint = refresh('gulp-csslint'),
    lr_port = 35729;

var paths = {
  scripts: ['!public/lib/**/*.js', 'public/**/*.js'],
  html: ['public/index.html','public/templates/*.html'],
  css: ['public/style.css'],
  buld: 'public/build'
}


gulp.task('serve', function(){
  nodemon({script: 'server.js'})
    .on('restart', function(){
      refresh(client);
    });
});

gulp.task('lr', function() {
  client.listen(lr_port, function (err) {
    if(err) console.err(err);
  });
});

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/'))
    .pipe(refresh(client))
    .pipe(notify({message: 'Scripts done!'}));
});

gulp.task('html', function () {
  return gulp.src(paths.html)
    .pipe(refresh(client))
    .pipe(notify({message: 'HTML changed.'}))
});

gulp.task('css', function () {
  return gulp.src(paths.css)

    .pipe(refresh(client))
    .pipe(notify({message: 'CSS done'}));
});

gulp.task('build', ['scripts', 'css']);

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['build', 'lr', 'serve', 'watch']);
