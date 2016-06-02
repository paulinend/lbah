// Packages
const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-ruby-sass");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("pug", function () {
  return gulp.src("app/**/*.pug", { base: "." })
           .pipe(pug({
             "pretty": true,
             "compileDebug": false
           }))
           .pipe(gulp.dest("."));
});

gulp.task("sass", function () {
  return sass("app/**/*.scss", { base: "." })
           .on("error", sass.logError)
           .pipe(gulp.dest("."));
});

gulp.task("typescript", function () {
  return gulp.src("app/**/*.ts", { base: "." })
           .pipe(ts(tsProject))
           .pipe(gulp.dest("."));
});

gulp.task("default", ["sass", "typescript"]);

gulp.task("watch_sass", ["sass"], function () {
  gulp.watch("app/**/*.scss", ["sass"]);
});

gulp.task("watch", ["typescript"], function () {
  gulp.watch("app/**/*.ts", ["typescript"]);
});
