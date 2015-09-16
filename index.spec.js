'use strict';
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');

describe('gulpfile:webserver', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../webserver'))
      .withPrompts({ modules: ['webserver'] }) // Mock the prompt answers
      .on('ready', function (generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('generate a webserver.js file', function () {
    assert.file(['./gulp-scripts/webserver.js']);
  });
});