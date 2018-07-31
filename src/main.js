import Vue from 'vue';
import {VueMasonryPlugin} from 'vue-masonry';
import App from './App.vue';
import Nav from './Nav.vue';
import Header from './Header.vue';
import ContentBody from './ContentBody.vue';
import GalleryGrid from './GalleryGrid.vue';
import Video from './Video.vue';
import Floorplan from './Floorplan.vue';


Vue.component('app-nav', Nav);
Vue.component('app-header', Header);
Vue.component('app-content-body', ContentBody);
Vue.component('app-gallery-grid', GalleryGrid);
Vue.component('app-video', Video);
Vue.component('app-floorplan', Floorplan);


Vue.use(VueMasonryPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
