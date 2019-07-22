module.exports = {
    devServer: {
        proxy:{
            "/api":{
                target:"http://202.120.40.8:30454/users",
                changeOrigin:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }
    }
}