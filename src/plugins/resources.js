import resources from '../resources.js'

module.exports = {
    install (Vue, options) {

        Vue.prototype.$api = resources;
        
    }
}