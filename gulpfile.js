/**
 * Gulp Config for edu-team-site
 * Based on tutorial from TypeScript's website:
 * https://www.typescriptlang.org/docs/handbook/gulp.html
 * Visrut Sudhakar, 2019
 */
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tslint = require('gulp-tslint');

var tsProject = ts.createProject('tsconfig.json');

var paths = {
    src: {
        static: {
            css: ['src/static/css/*.css'],
            js: ['src/static/js/*.js']
        },
        views: ['src/views/*.ejs']
    },
    dest: {
        static: 'dist/static',
        views: 'dist/views'
    }
}

// (1) Copy asset files
gulp.task('copy-assets-style', function() {
    return gulp.src(paths.src.static.css)
        .pipe(gulp.dest(paths.dest.static));
});

gulp.task('copy-assets-script', function() {
    return gulp.src(paths.src.static.js)
        .pipe(gulp.dest(paths.dest.static));
});

// (2) Copy .ejs view files
gulp.task('copy-views', function() {
    return gulp.src(paths.src.views)
        .pipe(gulp.dest(paths.dest.views));
});

// (3) Lint and fix TS files
gulp.task('lint-ts', function() {
    return tsProject.src()
        .pipe(tslint({
            fix: true,
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

// (4) Compile and distribute TS files
gulp.task('compile-ts', function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

// (0) Composed gulp task
gulp.task('default', gulp.series(
    'lint-ts',
    'compile-ts',
    'copy-views',
    gulp.parallel(
        'copy-assets-style',
        'copy-assets-script'
    )
));
