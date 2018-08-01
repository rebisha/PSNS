import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import {VueMasonryPlugin} from 'vue-masonry';
import App from './App.vue';
import Nav from './Nav.vue';
import Header from './Header.vue';
import ContentBody from './ContentBody.vue';
import GalleryGrid from './GalleryGrid.vue';
import Video from './Video.vue';
import Floorplan from './Floorplan.vue';
import ImageCarousel from './ImageCarousel.vue';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


Vue.component('app-nav', Nav);
Vue.component('app-header', Header);
Vue.component('app-content-body', ContentBody);
Vue.component('app-gallery-grid', GalleryGrid);
Vue.component('app-video', Video);
Vue.component('app-floorplan', Floorplan);
Vue.component('app-carousel', ImageCarousel);


Vue.use(VueMasonryPlugin);
Vue.use(VueCarousel);

new Vue({
  el: '#app',
  render: h => h(App)
})
