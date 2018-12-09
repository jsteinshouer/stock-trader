import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store';

const router = new VueRouter({
	routes: routes
});

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter("dollarFormat", function(x) {
	return x.toLocaleString(undefined,{ style: 'currency', currency: 'USD' });
})

new Vue({
	store: store,
	router: router,
	el: '#app',
	render: h => h(App)
})
