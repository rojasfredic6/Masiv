var path = require('path')
module.exports = {
  css:{
    loaderOptions: {
      stylus: {
        import: [path.resolve("src/assets/styles/estilos.styl")]
      }
    }
  }
}