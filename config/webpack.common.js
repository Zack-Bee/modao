const path = require("path")
const WebpackPwaManifest = require('webpack-pwa-manifest')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        app: "./src/index.jsx",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html"),
            favicon: path.resolve(__dirname, "../src/icon/favicon.png")
        }),
        new WebpackPwaManifest({
            name: "墨刀",
            short_name: "墨刀",
            description: "强大易用的原型设计与协同工具",
            background_color: "#fff",
            dir: "ltr",
            display: "standalone",
            icons: [
                {
                    src: path.resolve("./src/icon/logo.svg"),
                    sizes: [36, 48, 72, 96, 128, 256],
                    ios: true
                },
                {
                    src: path.resolve("./src/icon/logo.svg"),
                    sizes: [36, 48, 72, 96, 128, 256],
                    ios: "startup"
                },
            ],
            ios: {
                "apple-mobile-web-app-title": "墨刀",
                'apple-mobile-web-app-status-bar-style': 'black'
            },
            lang: "zh-CN",
            theme_color: "#F55D54"
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            loader: "style-loader!css-loader",
            include: path.resolve(__dirname, "../src"),
        }, {
            test: /\.(png|jpg|gif|svg|woff2|ttf|woff|eot|swf)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[hash].[ext]',
            }
        }, {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: "split"
        }
    }
}

