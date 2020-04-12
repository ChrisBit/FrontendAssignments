/* Require packages */
const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-minify");

/* File sources */
const sass_src = "sass/**/*scss";
const css_output = "www/assets/css";
const script_source = "javascript/*.js";
const script_output = "www/assets/js";

/* Style task */
gulp.task(
  "styles",
  gulp.series(function () {
    return gulp
      .src(sass_src)
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(gulp.dest(css_output));
  })
);

/* Script task */
gulp.task(
  "scripts",
  gulp.series(function () {
    return gulp
      .src(script_source)
      .pipe(
        minify({
          ext: {
            src: "-debug.js",
            min: "-min.js",
          },
          exclude: ["tasks"],
          ignoreFiles: [".combo.js", "-min.js"],
        })
      )
      .pipe(gulp.dest(script_output));
  })
);

function watch() {
  gulp.watch(sass_src, gulp.series("styles"));
  gulp.watch(script_source, gulp.series("scripts"));
}

exports.watch = watch;

/* Default gulp task */
gulp.task("default", gulp.series("styles", "scripts"));

/* Watch task */
gulp.task("watch", function () {
  gulp.watch(sass_src, ["styles"]);
  gulp.watch(script_source, ["scripts"]);
});
