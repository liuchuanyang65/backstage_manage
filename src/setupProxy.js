const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { 
      "target": "http://36d.kdwaimai.com/vip-plat-merchant-api" ,
      "secure": false,
      "changeOrigin": true,
      ws: true, // proxy websockets
      pathRewrite: {
        '^/api': '/'
      }
  }));
};