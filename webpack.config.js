const path = require("path")

module.exports = {
    mode:"development",
    entry: path.resolve(__dirname, `src`, `app`),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer:{
        port:3000,
        open: true,
        historyApiFallback: true
    },
    // determine file compile
    module: {
        rules: [{
            test: [/\.jsx?/,/\.js?/],
            loader:'babel-loader'
        }]
    }
}