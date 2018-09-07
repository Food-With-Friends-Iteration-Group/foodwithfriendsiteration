const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: 'development',
  devtool: 'incline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'assets/'),
    port: 3001,
    hotOnly: true,
    publicPath: '/build',
    proxy: {
      '/api/*': {
          target: 'http://localhost:3000',
          secure: false
      }
    }
  },

  module: {
    rules: [
      {
        test: /jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
          },
        },
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './build',
    filename: 'bundle.js',
  },

};