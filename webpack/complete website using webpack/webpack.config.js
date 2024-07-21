const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry:{
    index:'./src/js/index.js',
    contact:'./src/js/contact.js',
    about:'./src/js/about.js',
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    clean:true,
  },
  devtool:'inline-source-map',

  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/html/index.html',
      chunks:['index'],
    }),
    new HtmlWebpackPlugin({
      filename:'about.html',
      template:'./src/html/about.html',
      chunks:['about'],
    }),
    new HtmlWebpackPlugin({
      filename:'contact.html',
      template:'./src/html/contact.html',
      chunks:['contact'],
    }),
  ],

  module:{
    rules:[
      {
        test:/\.html$/,
      },
      {
        test:/\.js$/,
        exclude:'/node_modules/',
      },
      {
        test:/\.css$/i,
        use:['style-loader','css-loader'],
      },
      
    ],
  }
};