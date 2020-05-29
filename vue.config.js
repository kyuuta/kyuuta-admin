const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const assetsCDN = {
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
    },
    css: [],
    js: [
        '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
        '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
        '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
    ]
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,

    devServer: {
        port: 2333
        // proxy: {
        //     '/api': {
        //         target: '',
        //         ws: false,
        //         changeOrigin: true
        //     }
        // }
    },

    configureWebpack: {
        resolve: {
            alias: {
              '@': resolve('src')
            }
        },
        plugins: [
            // Ignore all locale files of moment.js
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        ],
        externals: process.env.NODE_ENV === 'production' ? assetsCDN.externals : {}
    },

    chainWebpack: config => {
        // set preserveWhitespace
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')

        // svg => vnode
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .oneOf('inline')
            .resourceQuery(/inline/)
            .use('vue-svg-icon-loader')
            .loader('vue-svg-icon-loader')
            .end()
            .end()
            .oneOf('external')
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/[name].[hash:8].[ext]'
            })

        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()

        config
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            )

        config
            .when(process.env.NODE_ENV === 'production', config => {
                // runtime inline html
                config
                    .plugin('ScriptExtHtmlWebpackPlugin')
                    .after('html')
                    .use('script-ext-html-webpack-plugin', [{
                        // `runtime` must same as runtimeChunk name. default is `runtime`
                        inline: /runtime\..*\.js$/
                    }])
                    .end()

                // split chunks
                config
                    .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            }
                        }
                    })
                    config.optimization.runtimeChunk('single')

                // cdn
                config
                    .plugin('html')
                    .tap(args => {
                        args[0].cdn = assetsCDN
                        return args
                    })

                // gzip
                config
                    .plugin('compressionPlugin')
                    .use(new CompressionPlugin({
                        filename: '[path].gz[query]',
                        algorithm: 'gzip',
                        test: /\.css$|\.ttf$|\.html$|\.svg$|\.json$|\.js$/,
                        threshold: 10240,
                        minRatio: 0.8,
                        deleteOriginalAssets: false // 是否删除源文件
                    }))

                // view to projectSize
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end()
            })
    },

    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            less: {
                modifyVars: {
                    'border-radius-base': '2px'
                },
                javascriptEnabled: true
            }
        }
    }
}
