const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const gulpSequence = require('gulp-sequence');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del(['dist', 'report']);
});

gulp.task('tslint', function() {
    return gulp.src("source/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

gulp.task("resources", function (){
    return gulp.src(["source/**/*", "!**/*.ts"])
        .pipe(gulp.dest("dist"));
});

// TypeScript compile
gulp.task('compile', function () {
    return gulp
        .src(tscConfig.files)
        .pipe(sourcemaps.init())          
        .pipe(typescript(tscConfig.compilerOptions)).js
        .pipe(sourcemaps.write('.'))     
        .pipe(gulp.dest('dist'));
});

gulp.task("libs", function () {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'es6-shim/es6-shim.map',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system-polyfills.js.map',
            'angular2/bundles/angular2-polyfills.js',
            'angular2/es6/dev/src/testing/shims_for_IE.js',
            'systemjs/dist/system.src.js',
            'rxjs/bundles/Rx.js',
            'angular2/bundles/angular2.dev.js',
            'angular2/bundles/router.dev.js',
            'lodash/lodash.min.js'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("dist/jslib"));
});

gulp.task('watch', function () {
    gulp.watch(["source/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["source/**/*.html", "source/**/*.css"],['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});



gulp.task('build', function (cb) {
    console.log("Building the project!!!");
    gulpSequence('clean', ['compile', 'resources', 'libs'])(cb);
});

gulp.task('default', ['build']);