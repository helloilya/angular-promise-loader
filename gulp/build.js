'use strict';

/**
 *	Build
 */

var gulp = require('gulp'),
	config = require('./config');

var $ = require('gulp-load-plugins')();

/**
 *	Images task
 *	@desc Copy images to dist folder
 *	@return
 */

gulp.task('build:images', function() {

	return gulp.src(config.src + config.folder.images + '/**/*.{jpg,png,gif}')
		.pipe($.plumber())
		.pipe(gulp.dest(config.dist + config.folder.images))
		.pipe($.size());

});

/**
 *	Styles task
 *	@desc Compress and concatenate css files to dist folder
 *	@return
 */

gulp.task('build:styles', function() {

	return gulp.src(config.src + config.folder.styles + '/**/*.css')
		.pipe($.plumber())
		.pipe($.concat('loader.css'))
		.pipe($.autoprefixer({
			browsers: ['Firefox < 20', 'Chrome < 20'],
		}))
		.pipe(gulp.dest(config.dist))
		.pipe($.csso())
		.pipe($.rename(function(path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist))
		.pipe($.size());

});

/**
 *	Scripts task
 *	@desc Compress and concatenate js files to dist folder
 *	@return
 */

gulp.task('build:scripts', function() {

	return gulp.src(config.src + config.folder.scripts + '/**/*.js')
		.pipe($.plumber())
		.pipe($.concat('loader.js'))
		.pipe(gulp.dest(config.dist))
		.pipe($.uglify())
		.pipe($.rename(function(path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist))
		.pipe($.size());

});

/**
 *	Build task
 *	@desc Show notification, when build will ready
 */

gulp.task('build', ['build:images', 'build:styles', 'build:scripts'], function() {

	gulp.src(config.folder + '**/*.html')
		.pipe($.notify({
			title: 'Gulp',
			message: 'Build was ready',
			sound: "Pop",
			icon: false
		}));

});