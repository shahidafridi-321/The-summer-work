const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry:{
    index:'./src/index.js',
    print:'./src/print.js',
  },
  plugins:[
    new HtmlWebpackPlugin(
      {
        title:'Development',
      },
    ),
  ],
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    clean:true,
  },

};