<template>
  <div class="header" >
    <img class="img-fluid" src="./assets/feature-1.jpg">
    <div class="header-logo">
      <img class="mt-2" src="./assets/logo1.png">&nbsp;
      <span class="logo font"> of
      <br><br>
      Sunshine North </span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.header {
  width: 100%;
  position: relative;
  text-align: center;
  color: white;
}

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
