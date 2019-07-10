import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './plugins/store'

import './plugins/axios'


Vue.config.productionTip = false


new Vue({
	render: h => h(App),
	store
}).$mount('#app')
