var webpack = require('webpack');
var path = path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080/',
            './src/index.js'
        ]
    },
    output: {
        /*path: path.resolve('./dist/[hash:8]/'),*/
        path: __dirname + '/build', 
        filename: 'index.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    resolve: {
        extensions: ['.js', '.ts','.scss', '.css', '.html','.handlebars']
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({fallback: 'style-loader', use: [ 'css-loader','sass-loader']})
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'less-loader'})
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }, {
            test: /\.handlebars$/,
            loader: 'handlebars-loader'
        },
        {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: true,
            allChunks: true
        }),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),*/
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}