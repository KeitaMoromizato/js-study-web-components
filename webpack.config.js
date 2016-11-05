module.exports = {
  entry: {
    js: './src/index.js',
    html: './src/index.html',
  },
  output: {
    path: `${__dirname}/out`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'out',
    port: 3001
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [],
          plugins: []
        },
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
  },
};
