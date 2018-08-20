import Vue from 'vue';
import * as VueGoogleMaps from "vue2-google-maps";
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
import MapArea from './MapArea.vue';
import Info from './Info.vue';
import News from './News.vue';
import Form from './Form.vue';
import Footer from './Footer.vue';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


Vue.component('app-nav', Nav);
Vue.component('app-header', Header);
Vue.component('app-content-body', ContentBody);
Vue.component('app-gallery-grid', GalleryGrid);
Vue.component('app-video', Video);
Vue.component('app-floorplan', Floorplan);
Vue.component('app-carousel', ImageCarousel);
Vue.component('google-map', MapArea);
Vue.component('app-info', Info);
Vue.component('app-news', News);
Vue.component('app-form', Form);
Vue.component('app-footer', Footer);

Vue.use(VueMasonryPlugin);
Vue.use(VueCarousel);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBtbh2yXA1UdNRm6zYvQ8W99K2C0DaBKK0",
    libraries: 'places',
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
