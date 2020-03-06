const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/electron.ts',
        target: 'electron-main',
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }]
        },
        output: {
            path: __dirname + '/',
            filename: 'electron.js'
        }
    },
    {
        mode: 'development',
        entry: './src/index.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }]
                },
                {
                    test: /\.css$/,
                    include: /src/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".js"]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'index.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
];