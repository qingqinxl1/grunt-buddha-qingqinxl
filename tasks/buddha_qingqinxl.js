/*
 * grunt-buddha-qingqinxl
 * 
 *
 * Copyright (c) 2015 qingqinxl
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddha_qingqinxl', 'test gruntplugin', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'buddha_qingqinxl',
      commentSymbol: '//'
    });

    var who = options.who,
      commentSymbol = options.commentSymbol,
      commentFilePathMap = {
        'buddha_qingqinxl': 'asserts/buddha.txt',
        'alpaca': 'asserts/alpaca.txt'
      },
      reg = {
        'buddha_qingqinxl': /o8888888o/,
        'alpaca': /┃┫┫　┃┫┫+ + + +/
      },
      commentFilePath = path.join(__dirname, commentFilePathMap[who]),
      commentContent = grunt.file.read(commentFilePath),
      lineCommentArr = commentContent.split(grunt.util.normalizelf('\n')),
      newCommentContent = '';

    /*lineCommentArr.forEach(function(val, idx, arr) {
      arr[idx] = commentSymbol + val;
    });*/
    for(var i = 0, len = lineCommentArr.length; i < len; i++){
      var curLine = lineCommentArr[i];
      newCommentContent += commentSymbol + curLine + grunt.util.normalizelf('\n');
    }
    //newCommentContent = lineCommentArr.join(grunt.util.normalizelf('\n'));



    // Iterate over all specified file groups.
    this.files.forEach(function(file) {
      // Concat specified files.
      file.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        var originalFileConent = grunt.file.read(filepath);

        if (!reg[who].test(originalFileConent)) {
          var newFileConent = newCommentContent + grunt.util.normalizelf('\n') +
            originalFileConent;
          grunt.file.write(filepath, newFileConent);
        }
      });

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};