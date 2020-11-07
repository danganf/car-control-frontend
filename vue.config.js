import path from 'path'

 module.exports = {
 configureWebpack: {
    resolve: {
       alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~class': path.resolve(__dirname, 'src/class'),
        '~configs': path.resolve(__dirname, 'src/configs'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~': path.resolve(__dirname, 'src'),
       },
    },
 }
