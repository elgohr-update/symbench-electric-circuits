'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
config.server.port = +process.env.PORT || config.server.port;
config.mongo.uri = process.env.MONGO_URI || config.mongo.uri;
config.blob.fsDir = process.env.DEPLOYMENT_BLOB_DIR || config.blob.fsDir;

config.seedProjects.basePaths = ['src/seeds/project'];
config.seedProjects.defaultProject = 'project';
config.plugin.allowServerExecution = true;
config.client.faviconPath = '/extlib/favicon.ico';
config.visualization.extraCss.push('electric-circuits/styles/global.css');

validateConfig(config);
module.exports = config;
