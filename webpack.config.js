const postCSSPlugins = {}


module.exports = {
    entry: './App/assets/scripts/App.js'
}
const path = require('path')
module.exports = {
    entry: './App/assets/scripts/App.js', 
    mode:'development',
    module: {
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader', {loader:'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    },
    output: {
        filename: 'bundled.js', 
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
	watch:true
}
