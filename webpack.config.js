const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const Dotenv = require('dotenv-webpack')

require('dotenv').config()
// const BundleAnalyzerPlugin =
//     require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = (env, arg) => {
    const isDev = !!env.WEBPACK_SERVE && arg.mode !== 'production'
    console.log('isDevMode', isDev)

    return {
        mode: isDev ? 'development' : 'production',
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
        },
        devServer: {
            port: env.WEBPACK_DEV_SERVER_PORT,
            static: './dist',
            open: {
                app: {
                    name: 'chrome',
                },
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.png$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                mimetype: 'image/png',
                            },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.svg$/,
                    use: 'file-loader',
                },
                {
                    test: /\.ts(x)?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        devtool: 'inline-source-map',
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
            }),
            new CleanWebpackPlugin(),
            new Dotenv(),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
            plugins: [new TsconfigPathsPlugin({})],
        },
        optimization: {
            runtimeChunk: 'multiple',
            minimize: !isDev,
        },
    }
}

module.exports = config
