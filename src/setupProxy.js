const {createProxyMiddleware} = require("http-proxy-middleware")
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1',{
            // 请求转发地址
            target:"http://localhost:5000",
            // 控制服务器收到的请求头中 Host 字段的值
            // 如果不加这个，服务器收到的 Host 是 localhost:3000
            // 加上这个后，服务器收到的是 localhost:5000
            changeOrigin:true,
            // 重写请求路径，把所有的 /api1 重写成空值
            // 不加的话请求的地址：http://localhost:5000/api1/students
            pathRewrite:{'/api1':''}
        }),
        createProxyMiddleware('/api2',{
            target:"http://localhost:5001",
            changeOrigin:true,
            pathRewrite:{'/api2':''}
        })
    )
}
