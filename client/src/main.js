import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueClipboard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
