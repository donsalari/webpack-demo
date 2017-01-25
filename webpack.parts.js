const webpack = require('webpack');

exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      hotOnly: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
      }),
    ],
  };
};

exports.loadCSS = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: paths,
          use: ['style-loader', 'css-loader?modules'],
        },
      ],
     },
   };
};

exports.lintJavaScript = function({paths, options}) {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: paths,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: options,
        },
      ],
    },
  };
};
