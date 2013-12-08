/*
 * grunt-pure-cjs
 * https://github.com/RReverser/grunt-pure-cjs
 *
 * Copyright (c) 2013 Ingvar Stepanyan
 * Licensed under the MIT license.
 */

'use strict';

var Promise = require('davy'),
	cjs = require('pure-cjs'),
	path = require('path');

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('pure_cjs', 'Grunt plugin for Pure CJS builder', function () {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options(),
			done = this.async();

		// Iterate over all specified file groups.
		Promise.all(this.files.map(function (file) {
			if (file.src.length === 0) {
				return;
			}

			if (file.src.length > 1) {
				grunt.fail.warn('Multiple source modules for one destination detected. Please set only one top module source per destination.');
			}

			grunt.file.mkdir(path.dirname(file.dest));

			return cjs.transform({
				input: file.src[0],
				output: file.dest,
				exports: options.exports
			});
		})).then(done, grunt.fail.fatal);
	});

};
