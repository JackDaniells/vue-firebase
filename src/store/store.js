
import Vue from 'vue'
import Vuex from 'vuex'

//vuex plugins
import vuexResources from '../plugins/vuexResources.js'

//modules
// import module from './modules/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {  },
	plugins: [vuexResources],
	// modules: {module},
	
	state: {
	
	},

	getters: {

	},

	mutations: {

	},

	actions: {

	}
})