const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main:path.resolve(__dirname,"src/js/index.js"),
        precios:path.resolve(__dirname,"src/js/precios.js"),
        contacto:path.resolve(__dirname,"src/js/contacto.js"),
    },
    output : {
        path: path.resolve(__dirname,"dist"),
        filename:"js/[name].js",
    },
    module:{
        rules:[
            /* Aqui van los loaders */
            {
            /*  test: que tipo de archivo quiero reconocer,
                user: que loader se va a encargar del archivo */
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    /*["style-loader","css-loader",/* Este solo entiende archivos css ]*/
                    use:"css-loader",
                }),
            }
        ]
    },
    plugins:[
        /* Aquí van los plugins */
        new ExtractTextPlugin("css/[name].css")
    ]
}
/* mode: "development" */ /* Solo para la version */