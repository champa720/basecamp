const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = [{
  mode: 'production',
  entry: './_sass/_style.scss',
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "webpack.style-bundle.js",
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './assets/css/style.css',
          },
        },
        {loader: 'extract-loader'},
        {loader: 'css-loader'},
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                autoprefixer()
              ]
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            // Prefer Dart Sass
            implementation: require('sass'),

            // See https://github.com/webpack-contrib/sass-loader/issues/804
            webpackImporter: false,
            sassOptions: {
              includePaths: ['./node_modules'],
            },
          },
        }
      ],
    }]
  },

}];
