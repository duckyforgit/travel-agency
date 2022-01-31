const path = require("path");
//const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {

    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        //publicPath: 'travel-site-files/app',
        path: path.resolve(__dirname, 'travel-site-files/app'),
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        //publicPath: '/app/',
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',   
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: [
                    'style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {
                        postcssOptions: {
                            plugins: postCSSPlugins
                        }
                    }}
                ]
            }
        ]
    }
}