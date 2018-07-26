import Vue from 'vue';
import App from './App.vue';
import Nav from './Nav.vue';
import Header from './Header.vue';
import ContentBody from './ContentBody.vue';

Vue.component('app-nav', Nav);
Vue.component('app-header', Header);
Vue.component('app-content-body', ContentBody);

new Vue({
  el: '#app',
  render: h => h(App)
})
