<template>
  <div id="app">
  <app-nav></app-nav>
  <app-header></app-header>
  <app-content-body></app-content-body>
  <app-gallery-grid></app-gallery-grid>
  <app-video></app-video>
  <app-floorplan></app-floorplan>
  <google-map name="example"></google-map>
  <app-info></app-info>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './assets/scss/variable.scss';
@import './assets/scss/global.scss';
</style>
