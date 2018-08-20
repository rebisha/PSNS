<template>
  <div class="container text-white text-center fonts mt-5 mb-5">
    <h4> News </h4>

    <div class="row mt-5 mb-5">
      <div class="col-lg-4">
        <img class="float-left" :src= "source">
        <div>
        <h6> This is a heading for your news event for inline content </h6>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </div>
      </div>

      <div class="col-lg-4">
        <img class="float-left" :src= "source">
        <div>
        <h6> This is a heading for your news event for inline content </h6>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </div>
      </div>

      <div class="col-lg-4">
        <img class="float-left" :src= "source">
        <div>
        <h6> This is a heading for your news event for inline content </h6>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>

    <h4 class="pt-5"> The team </h4>
    <p class="text-yellow"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br>
    Praesent aliquam, metus luctus tristique suscipit, lectus felis maximus
    <br>
    magna, sit amet ultricies felis sapien id purus.
    </p>

    <div class="row mt-5 mb-5">
      <div class="col-lg-3">
        <img class="mb-3" :src= "src">
        <h6> Company Name </h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent aliquam, metus luctus tristique suscipit, lectus felis maximus
        magna, sit amet ultricies felis sapien id purus.
      </div>
      <div class="col-lg-3">
        <img class="mb-3" :src= "src">
        <h6> Company Name </h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent aliquam, metus luctus tristique suscipit, lectus felis maximus
        magna, sit amet ultricies felis sapien id purus.
      </div>
      <div class="col-lg-3">
        <img class="mb-3" :src= "src">
        <h6> Company Name </h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent aliquam, metus luctus tristique suscipit, lectus felis maximus
        magna, sit amet ultricies felis sapien id purus.
      </div>
      <div class="col-lg-3">
        <img class="mb-3" :src= "src">
        <h6> Company Name </h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent aliquam, metus luctus tristique suscipit, lectus felis maximus
        magna, sit amet ultricies felis sapien id purus.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      source: 'src/assets/media/r.png',
      src: 'src/assets/media/R7.png'
    }
  }
}
</script>

<style lang="scss">

</style>



