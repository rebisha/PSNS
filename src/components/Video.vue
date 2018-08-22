<template>
<section class="mt-6 mb-5">
    <div class="container">
      <video controls="1">
        <source v-if="src" :src="src" :type="type">
      </video>
    </div>
</section>
</template>

<style lang="scss">
.container video {
  width: 100%;
}
</style>

<script>
export default {
  name: 'Videos',
  data () {
    return {
      src: 'src/assets/media/PSN.mp4',
      type: 'video/mp4'
    }
  }
}
</script>
