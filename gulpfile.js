const gulp = require("gulp");
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');


gulp.task("copy-client-assets", () => {
    return gulp.src([
        "./node_modules/react/dist/react.js",
        "./node_modules/react-dom/dist/react-dom.js"
        ])
    .pipe(gulp.dest("./public/js"));
});

gulp.task("build-client", ["copy-client-assets"], () => {
    const stream = gulp.src("./src/client/index.tsx")
        .pipe(gulpWebpack(require("./webpack.config.js"), webpack))
        .pipe(gulp.dest("./public/js"));
    return stream;
});

gulp.task("default", ["build-client"]);
