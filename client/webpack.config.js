let path = require('path');
let webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    //Content
    entry: './src/index.js',
    mode: 'development',
    // A SourceMap without column-mappings ignoring loaded Source Maps.
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        //simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
        new HtmlWebpackPlugin({
            title: 'Talent Identification Manager'
        }),
        //Auto replacement of page when i save some file, even css
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Tooltip: "exports?Tooltip!bootstrap/js/dist/tooltip",
            Alert: "exports?Alert!bootstrap/js/dist/alert",
            Button: "exports?Button!bootstrap/js/dist/button",
            Carousel: "exports?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports?Modal!bootstrap/js/dist/modal",
            Popover: "exports?SkillPopover!bootstrap/js/dist/popover",
            Scrollspy: "exports?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports?Tab!bootstrap/js/dist/tab",
            Util: "exports?Util!bootstrap/js/dist/util",
        })

    ],

    output: {
        path: path.join(__dirname, publicPath),
        filename: 'main.bundle-0.0.1.js',
        publicPath: "",
        sourceMapFilename: 'main.map',
    },

    devServer: {
        port: 3000,
        host: 'localhost',
        //Be possible go back pressing the "back" button at chrome
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        //hotmodulereplacementeplugin
        hot: true
    },
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules(?!\/webpack-dev-server)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: ['syntax-decorators']
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}