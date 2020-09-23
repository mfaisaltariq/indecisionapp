const path = require('path')
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.join(__dirname, 'public/dist/'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}