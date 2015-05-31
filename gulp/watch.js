'use strict';

/**
 *	Watch
 */

var gulp = require('gulp'),
	config = require('./config');

var $ = require('gulp-load-plugins')();

/**
 *	Scripts task
 *	@desc Validate js files
 */

gulp.task('watch:scripts', function() {

	gulp.src([config.src + config.folder.scripts + '/**/*.js', config.demo + '**/*.js'])
		.pipe($.plumber())
		.pipe($.jshint())
		.pipe($.jshint.reporter())
		.pipe($.jsvalidate());

});

/**
 *	Styles task
 *	@desc Validate css files
 */

gulp.task('watch:styles', function() {

	gulp.src([config.src + config.folder.styles + '/**/*.css', config.demo + '**/*.css'])
		.pipe($.plumber())
		.pipe($.csslint({
			'box-model': false,
			'adjoining-classes': false,
			'outline-none': false
		}))
		.pipe($.csslint.reporter());

});

/**
 *	Html task
 *	@desc Validate html files
 */

gulp.task('watch:html', function() {

	gulp.src(config.demo + '**/*.html')
		.pipe($.plumber())
		.pipe($.htmlhint())
		.pipe($.htmlhint.reporter());

});

/**
 *	Watch task
 *	@desc Run a watcher for the src and demo folders
 *	@extends build
 */

gulp.task('watch', ['build'], function() {

	gulp.watch([config.src + config.folder.styles + '/**/*.css', config.demo + '**/*.css'], ['watch:styles', 'build:styles']);
	gulp.watch([config.src + config.folder.scripts + '/**/*.js', config.demo + '**/*.js'], ['watch:scripts', 'build:scripts']);
	gulp.watch(config.demo + '**/*.html', ['watch:html']);

});