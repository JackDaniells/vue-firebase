import Vue from 'vue'

import routes from './routes.js'

// import resources from '@/plugins/resources.js'

// import store from '@/store/store.js'

// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/pt-br'

// Vue.use(ElementUI, { locale })


// Vue.use(resources);

import config from '../firebase.json'

import firebase from 'firebase';

import firebaseui from 'firebaseui';

// import * as firebaseui from 'firebaseui'

firebase.initializeApp(config);

import App from './App.vue'

// Vue.prototype.$firebase = firebase.auth()

Vue.config.productionTip = false

let app;

window.firebase = firebase

firebase.auth().onAuthStateChanged(function(user) {

	if(!app) {
		new Vue({
			// el: '#app',
			// template:'<App/>',
			components: { App },
			// store: store,
			router: routes,
			render: h => h(App)
		})
		.$mount('#app')
	}

})
