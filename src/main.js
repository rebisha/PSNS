import Vue from 'vue';
import App from './App.vue';
import Nav from './Nav.vue';
import Header from './Header.vue';
import ContentBody from './ContentBody.vue';
import GalleryGrid from './GalleryGrid.vue';

Vue.component('app-nav', Nav);
Vue.component('app-header', Header);
Vue.component('app-content-body', ContentBody);
Vue.component('app-gallery-grid', GalleryGrid);

new Vue({
  el: '#app',
  render: h => h(App)
})
