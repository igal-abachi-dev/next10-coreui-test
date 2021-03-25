const path = require('path')
module.exports = {
    sassOptions: {includePaths: [path.join(__dirname, 'styles')],},
    future: {
        webpack5: true
    },
    webpack: function (config, options) {
        console.log(options.webpack.version);
        config.experiments = {};
        // config.node = {
        //     fs: 'empty'
        // };
        return config;
    }
}
