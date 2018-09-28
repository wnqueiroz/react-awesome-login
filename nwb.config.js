const path = require("path")

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    rules: {
      sass: {
        includePaths: [path.resolve("src/styles")]
      }
    }
  }
}
