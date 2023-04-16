const path = require("path");
module.exports = {
    entry:"./resources/script/script.js",
    output : {
        filename:"bundle.js",
        path : path.resolve(__dirname,"dist"),
    },
    module:{
        rules :[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"],
            }
        ]
    }
    }
