import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './config';

export default {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    watch: true,
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: 'url-loader?limit=20480&name=img/[name].[ext]'
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': config.path.js,
            scss: config.path.styles,
            img: config.path.img,
            fonts: config.path.fonts
        }
    },
    devServer: config.devServer
};
