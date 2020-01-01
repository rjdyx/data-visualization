const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

const projectRoot = path.resolve(__dirname, './')

module.exports = {
  configureWebpack: {
    plugins: [
      new CompressionPlugin({algorithm: 'gzip',
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'echarts': 'echarts',
      'element-ui': 'elementUI'
    },
    resolve: {
      // 路径别名
      alias: {
        'projectRoot': projectRoot,
        'vue$': 'vue/dist/vue',
        'public': path.resolve(__dirname, './public'),
        'components': path.resolve(__dirname, './src/components'),
        'utils': path.resolve(__dirname, './src/utils'),
        'node_modules': path.resolve(__dirname, './node_modules')
      }
    }
  }
};
