<template>
  <header>
    <img class="img-fluid" src="./assets/media/feature-1.jpg">
    <div class="header-logo text-center">
      <img class="mt-2" src="./assets/media/logo1.png">&nbsp;
      <span class="logo font"> of
      <br><br>
      Sunshine North </span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-body'
}
</script>


<style lang="scss">
.header-logo {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 35px;

  img {
    vertical-align: bottom;
  }
}
</style>
