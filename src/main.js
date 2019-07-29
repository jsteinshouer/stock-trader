import Vue from 'vue';
import VueResource from 'vue-resource';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store';

const router = new VueRouter({
	routes: routes
});

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter("dollarFormat", function(x) {
	return x.toLocaleString(undefined,{ style: 'currency', currency: 'USD' });
})

new Vue({
    store: store,
    router: router,
    vuetify: vuetify,
    render: h => h(App)
}).$mount('#app')
