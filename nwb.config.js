const path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    rules: {
      sass: {
        includePaths: [path.resolve('src/styles')],
      },
    },
    extra: {
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.js[x]$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react'],
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
    },
  },
}
