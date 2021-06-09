const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    entry: '/src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    target:'node',
    node:{
        __filename: false,
        __dirname: false,
    },
    externals:[webpackNodeExternals()],
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[
                            ["@babel/plugin-transform-runtime",{
                                regenerator: true   
                            }]
                        ]
                    }
                }
            }
        ]
    }
}