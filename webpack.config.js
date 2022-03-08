const path = require('path');

module.exports = {
  entry: './src/main.jsx',
  mode:'development',
  output: {
    filename: 'main.bundled.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [

      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env']
            plugins: [
              "babel-plugin-styled-components"
            ],
            presets:["@babel/preset-react"],
            
          }
        }
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

    ]
  }
};