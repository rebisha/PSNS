<template>
<section class="grid">
  <div class="grid-item grid-item--width2 grid-item--height2">
    <img src="./assets/1.png">
  </div>

  <div class="grid-item grid-item--width2 grid-item--height">
    <img src="./assets/2.png">
  </div>

  <div class="grid-item">
    <img src="./assets/3.png">
  </div>

  <div class="grid-item">
    <img src="./assets/4.png">
  </div>

  <div class="grid-item grid-item--width grid-item--height">
    <img src="./assets/5.png">
  </div>
</section>
</template>

<style lang="scss">
.grid-item {
  width: 365px;
  height: 400px;
  float: left;
}

.grid-item--width2 {
  width: 769px;
}

.grid-item--width {
  width: 775px;
}

.grid-item--height2 {
  height: 800px;
}

.grid-item--height {
  height: 400px;
}
</style>

<script>
</script>
