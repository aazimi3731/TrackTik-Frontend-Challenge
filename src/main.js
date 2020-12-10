import Vue from 'vue';
import vuetify from './plugins/vuetify/vuetify';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  vuetify,
  store,
}).$mount('#app');
