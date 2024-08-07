const path = require('path');

module.exports = {
    mode: 'development', // Para saber si esta en desarrollo o producción
    entry: './src/index.js', //punto de entrada de la aplicación
    output: {
       filename: 'bundle.js', //nombre del archivo de salida
       path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/,  //Regex para identificar archivos css
                use: ['style-loader', 'css-loader'], //Loader para librerías css
            },
            {
                test: /\.js$/, //Regex para identificar archivos js
                exclude: /node_modules/, //Excluir la carpeta node modules
                use: {
                    loader: 'babel-loader', //Loader para convertir js moderno al js compatible a mas navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Genera source maps para facilitar la depuracion
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), //Carpeta del que correrá el servidor
        },
        compress: true, //Habilitar compresión gzip 
        port: 9000, //Puerto del servidor de desarrollo 
    },
};