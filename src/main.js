import Vue from 'vue';
import App from './App.vue';
import Nav from './Nav.vue';
import Header from './Header.vue';

Vue.component('app-nav', Nav);
Vue.component('app-header', Header);

new Vue({
  el: '#app',
  render: h => h(App)
})
