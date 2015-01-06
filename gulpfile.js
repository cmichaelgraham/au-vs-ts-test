var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var to5 = require('gulp-6to5');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var yuidoc = require("gulp-yuidoc");
var changelog = require('conventional-changelog');
var assign = Object.assign || require('object.assign');
var fs = require('fs');
var bump = require('gulp-bump');
var tools = require('aurelia-tools');

var path = {
    source: 'src/**/*.js',
    output: 'dist/',
    doc: './doc'
};

var compilerOptions = {
    filename: '',
    filenameRelative: '',
    blacklist: [],
    whitelist: [],
    modules: '',
    sourceMap: true,
    sourceMapName: '',
    sourceFileName: '',
    sourceRoot: '',
    moduleRoot: '',
    amdModuleIds: false,
    runtime: false,
    comments: false,
    experimental: false
};

gulp.task('update-own-deps', function () {
    tools.updateOwnDependenciesFromLocalRepositories();
});
