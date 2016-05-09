var path = require('path');

/**
 * import common webpack settings
 */
const commonSettings = require('./webpack.config.common.js');

/**
 * @link https://webpack.github.io/docs/configuration.html#cache
 * Cache generated modules and chunks to improve performance for multiple incremental builds.
 This is enabled by default in watch mode.
 * @type {boolean}
 */
commonSettings.cache = true;

/**
 * @link https://webpack.github.io/docs/configuration.html#debug
 * Switch loaders to debug mode.
 * @type {boolean}
 */
commonSettings.debug = true;

/**
 * @link https://webpack.github.io/docs/configuration.html#devtool
 * Choose a developer tool to enhance debugging.
 * source-map - A SourceMap is emitted. See also output.sourceMapFilename.
 * @type {string}
 */
commonSettings.devtool = 'eval';

/**
 *
 * @link https://github.com/typicode/json-server
 * @type {jsonServer|exports|module.exports}
 * start to configure mock rest server
 */

/** will added mock server after
 var jsonServer = require("json-server");
 var server = jsonServer.create();

 server.use(jsonServer.defaults());

 var router = jsonServer.router(commonSettings.paths.mock_db);

 server.use('/api',router);

 server.listen(3000);
 **/
/**
 * end to configure mock rest server
 */

/**
 * end to configure mock rest server
 */


module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        plugins : [
            'karma-webpack',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
            'karma-bamboo-reporter'
        ],
        frameworks: ['mocha'],

        files: [
            '__test__/**/*.spec.js'
        ],
        preprocessors: {
            '__test__/**/*.spec.js': ['webpack']
        },
        reporters: ['mocha','bamboo'],

        webpack:commonSettings,
        webpackServer: {
            noInfo: true
        }
    });
};


