const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {

        // For mobile device debugging. Firewall must be blocked

        // hot: true,
        // host: '192.168.0.113',
        // port: 7373,
        // proxy: {
        //     '/api/**': {
        //         target: '192.168.0.113:8000',
        //         secure: false,
        //         changeOrigin: true,
        //     }
        // },
        port: 8081,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});

