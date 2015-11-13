/*
 |--------------------------------------------------------------------------
 | Created by Julien Vincent
 |--------------------------------------------------------------------------
 **/

module.exports.default = function (system) {
    return {
        settings: {
            enabled: true,
            port: 8000,
            logLevel: "INFO"
        },

        init: function () {
            var serve = require("storm-serve"),
            express = require("express"),
            server = express(),
            compression = require('compression'),
            path = require('path'),
            merge = require('lodash/object/merge');
            this.settings = merge(this.settings, system.settings);

            var serve_conf = {
                mappings: {
                    "/": __dirname + "/index.html",
                    "/*.js": __dirname + "/react",
                    "/*.scss": __dirname + "/react"
                },

                deps: {

                    production: false,

                    uglify: false,
                    moduleDeps: {
                        transform: [['babelify', {
                            sourceMap: false,
                            stage: 0,
                            optional: 'runtime',
                            ignore: ["*.min.js"]
                        }]]
                    }
                },

                aliases: {
                    "factories": __dirname + '/factories/factories.js'
                },
                loglevel: this.settings.logLevel,
            };

            if (this.settings.enabled) {
                system.log.debug("starting local-interface web server");

                server.use(compression());
                server.use(serve.main(serve_conf));
                server.use(serve.scss());

                server.listen(this.settings.port);
            }
        }
    }
};
