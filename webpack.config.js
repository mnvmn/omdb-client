const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

require('dotenv').config()

const config = (env, arg) => {
  const isDev = arg.mode !== 'production'

  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: isDev ? '/' : env.PUBLIC_PATH,
    },
    devServer: {
      historyApiFallback: true,
      port: env.WEBPACK_DEV_SERVER_PORT,
      static: ['src/public'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|mjs)$/,
          // exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
              plugins: ['babel-plugin-styled-components'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
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
          test: /\.ts(x)?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/i,
          type: 'asset',
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        publicPath: 'auto',
        favicon: 'src/assets/symbol.svg',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/public', to: 'public' }],
      }),
      new Dotenv(),
      // isDev &&
      //   new ReactRefreshWebpackPlugin({
      //     overlay: false,
      //   }),
      new CompressionPlugin(),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      plugins: [new TsconfigPathsPlugin({})],
    },
    devtool: 'inline-source-map',
    optimization: {
      runtimeChunk: 'single',
      minimize: !isDev,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            keep_classnames: !isDev,
            keep_fnames: !isDev,
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
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
  }
}

module.exports = config
