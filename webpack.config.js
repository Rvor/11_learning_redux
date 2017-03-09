var path = require('path');
var webpack = require('webpack');

const CLIENT_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'dist');

const loaders = [
  {
    test: /\.js$/,
    include: CLIENT_DIR,
    loader: 'babel-loader',
    query: {
          presets: ['es2015', 'react'],
        },
  },
  {
    test: /\.styl$/,
    include: CLIENT_DIR,
    loader: 'style-loader!css-loader!stylus-loader'
  },
];

const aliases = {
  components: path.resolve(CLIENT_DIR, 'components'),
  reducers: path.resolve(CLIENT_DIR, 'reducers'),
  actions: path.resolve(CLIENT_DIR, 'actions'),
};

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/reduxstagram'
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath:'/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders
    }
};