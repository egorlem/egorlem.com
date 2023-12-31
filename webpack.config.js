const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './index.js',
    // stats: './stats.js' 
  },
  output: {
    publicPath: '',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
  },
  // presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),

      // 'src/index.html',
      //inject: 'head',
    }),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'public'), to: 'public' },
        { from: path.resolve(__dirname, 'src', 'card'), to: 'card' },
        { from: path.resolve(__dirname, 'src', 'seo'), to: '' },
      ],
    }),
  ],
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //don't test node_modules folder
        use: {
          loader: "babel-loader",
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      // {
      //   test: /\.(woff|woff2)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         mimetype: 'application/font-woff',
      //         name: '[name].[ext]',
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(ttf|eot)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2|vcf?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      fonts: path.resolve(__dirname, 'src/public/fonts'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },

    compress: true,
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
};
