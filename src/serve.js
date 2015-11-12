/*
 |--------------------------------------------------------------------------
 | Created by Julien Vincent
 |--------------------------------------------------------------------------
 **/

module.exports = function (system) {
    return {
        settings: {
            run: true,
            port: 8000,
        },

        init: function () {
            var serve = require("storm-serve"),
            express = require("express"),
            server = express(),
            compression = require('compression'),
            path = require('path'),
            merge = require('lodash/object/merge');
            merge(this.settings, system.settings.localInterface);

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
                }
            };

            server.use(compression());
            server.use(serve.main(serve_conf));
            server.use(serve.scss());

            if (this.settings.run) {
                server.listen(this.settings.port);
            }
        }
    }
};
