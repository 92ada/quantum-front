const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')

module.exports = function(plop) {
  plop.setGenerator('detail.vue', viewGenerator)
  plop.setGenerator('component', componentGenerator)
}
