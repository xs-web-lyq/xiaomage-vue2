const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js',
        // publicPath:'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
          },
          {
            test: /\.(png|jpg|gif|webp)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                    // 大于limit大小的图片将会通过file.loader进行解析，放到dist文件里
                    // 小于limit大小的图片将会通过url.loader进行处理
                  limit: 1000,
                    // 通过配置name属性可以指定大于limit图片解析之后的名称放到img文件夹中
                    name:'img/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {
            test: /\.vue$/,
            use:['vue-loader']
          }
        ]
    },
    resolve: {
        // 配置可以省略文件后缀。
        extensions:['.js','.css','.vue'],
        // alias 别名
        
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归刘永奇所有'),
        new htmlWebpackPlugin({
          template:'index.html'
        }),
       
    ],
        
    
}