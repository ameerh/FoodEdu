/**
 * This is a sample configuration meant to get users and up running on a local
 * machine.  The configuration will not support multi-process on a single
 * server or multi-server/elastic environments.  For more detailed information
 * on the options provided please refer to the /include/config.js file.
 *
 * The file can be renamed to "config.js" in the same directory as this file
 * and it will be used as the configuration when PencilBlue is started.  If
 * this file is used then there is no need to create a "config.js"
 */

module.exports = {
    "siteName": "footEducation",
    // "siteRoot": "http://localhost:8080",
    "siteRoot": "http://footeducation-staging.us-east-1.elasticbeanstalk.com/",
    "sitePort": process.env.PORT || '8080',

    // "siteRoot": "https://www.footeducation.com/",
    "logging": {
        "level": "info"
    },
    "db": {
        "type":"mongo",
        "servers": [
            // "127.0.0.1:27017"
            'mongodb://footeducation:Jan12017@ds133549-a0.mlab.com:33549?replicaSet=rs-ds133549'
        ],
        "name": "footeducation",
        "writeConcern": 1,
        query_logging: false
    },
    "server": {
        "ssl": {
            "enabled": false,
            "use_handoff_port_in_redirect": false,
            "use_x_forwarded": false
        }
    },
    "cache": {
        "fake": true,
        "host": "localhost",
        "port": 6379
    },
    "settings": {
        "use_memory": false,
        "use_cache": false
    },
    "templates": {
        "use_memory": true,
        "use_cache": false
    },
    "plugins": {
        "caching": {
            "use_memory": false,
            "use_cache": false
        }
    },
    "registry": {
        "type": "redis"
    },
    "session": {
        "storage": "mongo"
    },
    "media": {
        "provider": "mongo",
        "max_upload_size": 6 * 1024 * 1024
    },

    /*"media": {
        "provider": "/plugins/s3-pencilblue/include/s3_media_provider.js"

    },*/
    "cluster": {
        "workers": 1,
        "self_managed": false
    },
    multisite: {
        enabled: false,
        globalRoot: 'http://global.localhost:8080'
    }
};
