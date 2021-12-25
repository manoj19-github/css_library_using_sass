const {src,dest,watch,series}=require("gulp")
const sass=require("gulp-sass")(require("sass"))
const purgecss=require("gulp-purgecss")

function buildStyles(){
  return src("useSass/**/*.scss")
  .pipe(sass())
  .pipe(purgecss({content:['public/*.html']}))
  .pipe(dest("public/css"))
}

function watcher(){
  watch(["useSass/**/*.scss","public/*.html"],buildStyles)
}


module.exports.default=series(buildStyles,watcher)
