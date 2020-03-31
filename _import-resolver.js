const path = require('path')
const Vue = require('vue')
const requireContext = require('require-context')

const requireComponent = requireContext(
  path.resolve(__dirname, './components'),
  true,
  /\.vue$/,
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)
  // // Register component globally
  Vue.component(fileName, componentConfig.default || componentConfig)
})
