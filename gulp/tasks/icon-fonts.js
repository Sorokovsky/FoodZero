import { path, gulp } from "../config/index.js";
export const iconFonts = () => {
    return gulp.src(path.src.iconFonts, {encoding: false})
    .pipe(gulp.dest(path.build.iconFonts))
};