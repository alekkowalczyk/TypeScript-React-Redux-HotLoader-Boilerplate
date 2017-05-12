const gulp = require("gulp");

gulp.task("copy-client-assets", () => {
    return gulp.src([
        "./node_modules/react/dist/react.js",
        "./node_modules/react-dom/dist/react-dom.js"
        ])
    .pipe(gulp.dest("./public/js"));
});

gulp.task("default", ["copy-client-assets"]);
