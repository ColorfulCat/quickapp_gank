const vm = require('vm')

module.exports = function checkAsyncAwait () {
  try {
    new vm.Script('(async () => ({}))()')
    return true
  } catch (e) {
    return false
  }
}
