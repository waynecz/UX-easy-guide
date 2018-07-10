const path = require('path')

module.exports = {
  chainWebpack(config, context) {
    config
      .entry('main')
      .add('./src/main.js')
      .end()
      .output.path(path.resolve(process.cwd(), './dist'))
  }
}
