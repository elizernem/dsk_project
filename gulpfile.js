import gulp from "gulp";
import plumber from "gulp-plumber";
import gulpSass from "gulp-sass";
import dartSass from "sass";
const sass = gulpSass(dartSass);
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";

// Styles

export const styles = () => {
  return gulp
    .src("sass/style.scss", { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(gulp.dest("css", { sourcemaps: "." }));
};

const watcher = () => {
  gulp.watch("sass/**/*.scss", gulp.series(styles));
};

export default gulp.series(styles, watcher);
