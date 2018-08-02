import Vue from 'vue'

import routes from '@/routes.js'

// import resources from '@/plugins/resources.js'

// import store from '@/store/store.js'

// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/pt-br'

// Vue.use(ElementUI, { locale })


// Vue.use(resources);


import App from './App.vue'

// Vue.prototype.$firebase = firebase.auth()

Vue.config.productionTip = false

new Vue({
	components: {},
	// store: store,
	router: routes,
	created: function() {
				
	},
	methods: {
		
	},
  render: h => h(App)
}).$mount('#app')
