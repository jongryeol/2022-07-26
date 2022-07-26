const {merge} = require("webpack-merge")
const baseConfig = require("./webpack.config.base")

module.export = merge ( baseconfig, {
    mede : "developement"
})