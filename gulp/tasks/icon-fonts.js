import { path, gulp } from "../config/index.js";
export const iconFonts = () => {
    return gulp.src(path.src.iconFonts)
    .pipe(gulp.dest(path.build.iconFonts))
};