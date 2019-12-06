const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './packages/admin/build/index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.json'],
    symlinks: true,
  },
  devServer: {
    noInfo: true,
    port: 3333,
    open: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
    },
  },
};
