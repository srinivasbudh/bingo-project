module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: 'worker-loader',
      options: {
        name: 'static/[hash].worker.js',
        publicPath: '/_next/'
      }
    })

    // Overcome Webpack referencing `window` in chunks
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`

    return config
  }
}
