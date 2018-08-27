<template>
  <div id="app">
  <app-nav></app-nav>
  <app-header></app-header>
  <app-content-body></app-content-body>
  <app-gallery-grid></app-gallery-grid>
  <app-video></app-video>
  <floorplan-carousel></floorplan-carousel>
  <google-map name="example"></google-map>
  <app-info></app-info>
  <app-news></app-news>
  <app-form></app-form>
  <app-footer></app-footer>
  </div>
</template>

<script>
new Vue({
  el: "#app",
  data: {
    msg: "Welcome to your vue.js app"
  }
});
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './assets/scss/variable.scss';
@import './assets/scss/global.scss';
</style>
