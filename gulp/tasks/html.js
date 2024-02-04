export const html = () => {
    return app.gulp.src(app.path.build.html)
        .pipe(app.plugins.browsersync.stream())
}