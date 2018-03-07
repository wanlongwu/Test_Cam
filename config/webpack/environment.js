const { environment } = require('@rails/webpacker')
const coffee =  require('./loaders/coffee')

// Bootstrap 3 has a dependency over jQuery:
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

environment.loaders.append('coffee', coffee)
module.exports = environment
