const gulp = require("gulp"),
  src = gulp.src,
  dest = gulp.dest,
  sass = require("gulp-sass")(require("sass")),
  watch = gulp.watch

const css = ()=>
  src("./sass/**/*.scss")
  .pipe(sass({
    outputStyle:"compressed"
  }))
  .pipe(dest("./css"))

const watchFiles = ()=>{
  watch("./sass/**/*.scss",css)
}

exports.sass = css
exports.watch = watchFiles
