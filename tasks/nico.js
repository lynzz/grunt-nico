/*
 * grunt-nico
 * https://github.com/lynzz/grunt-nico
 *
 * Copyright (c) 2014 lynzz
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('nico', 'run nico with grunt', function() {
    //grunt.log.writeln(this.options);
    var done = this.async();
    var child = grunt.util.spawn({
        cmd: 'nico',
        args: ['server', '--watch']
      }, function (error, result, code) {
        if (error) {
          console.log(error);
        }
        return done(code);
      });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    return child;
  });

};
