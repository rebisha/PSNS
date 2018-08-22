import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import * as VueGoogleMaps from "vue2-google-maps";
import VueCarousel from 'vue-carousel';
import {VueMasonryPlugin} from 'vue-masonry';
import 'bootstrap/dist/js/bootstrap.min';

//importing components
import App from './App.vue';
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';
import ContentBody from './components/ContentBody.vue';
import GalleryGrid from './components/GalleryGrid.vue';
import Video from './components/Video.vue';
import Floorplan from './components/Floorplan.vue';
import ImageCarousel from './components/ImageCarousel.vue';
import MapArea from './components/MapArea.vue';
import Info from './components/Info.vue';
import News from './components/News.vue';
import Form from './components/Form.vue';
import Footer from './components/Footer.vue';

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
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease-in",
  offset: -100,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
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
});

