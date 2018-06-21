const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: ['babel-polyfill', './app.js'], // path to the entry file
  output: {
    path: path.resolve(__dirname, './dist'), // absolute path to the bundle asset
    filename: 'vuex-demo2.min.js' // entry file name for the bundle file
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        // load external styles & <style> blocks
        // in .vue modules into internal styles
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      },
      {
        // transform ES6 & <script> blocks
        // in .vue files into the asset .js file
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/, // file tree traverse, exclude the path
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: 'production', // set production mode to enable optimization plugins
  optimization: {
    minimize: true // minimize the JS modules
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json'] // file tree traversal, search the file extensions automatically
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
