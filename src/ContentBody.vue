<template>
<section class="mb-5 bg-primary" id="values">
  <div class="col-lg-12 text-center">
    <img class="mt-6" src="./assets/logo1.png">&nbsp;
    <span class="logo"> of
    <br>
    Sunshine North </span>
    <p class="text-white">Duke Street, Sunshine North</p>

    <p class="text-yellow"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br>
    Praesent aliquam, metus luctus tristique suscipit, lectus felis maximus
    <br>
    magna, sit amet ultricies felis sapien id purus.
    </p>

    <p class="text-white"> Display Suite
    <br>
    XX Duke Street, Sunshine North </p>
  </div>

  <h4 class="text-white text-center"> Now Selling </h4>
  <br>

    <div class="row pb-5">
      <div class="col-lg-3">
        <div class="header-logo text-white">
          <h4> 3 Bed, 2 Bath
          <br>
          apartment </h4>
          Starting from $XXX,XXX

          <button class="btn btn-floorplan text-white mt-3"> See Floorplan </button>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="header-logo text-white">
          <h4> 3 Bed, 2 Bath
          <br>
          apartment </h4>
          Starting from $XXX,XXX

          <button class="btn btn-floorplan text-white mt-3"> See Floorplan </button>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="header-logo text-white">
          <h4> 3 Bed, 2 Bath
          <br>
          apartment </h4>
          Starting from $XXX,XXX

          <button class="btn btn-floorplan mt-3 active"> See Floorplan </button>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="header-logo text-white">
          <h4> 3 Bed, 2 Bath
          <br>
          apartment </h4>
          Starting from $XXX,XXX

          <button class="btn btn-floorplan text-white mt-3"> See Floorplan </button>
        </div>
      </div>

    </div>
</section>
</template>

<script>
</script>

<style lang="scss">
.btn-floorplan {
  width: 152px;
  height: 48px;
  background-color: #52593f;
  border-radius: 0px !important;

  &.active {
    background-color: #ffc600;
    color: black;
  }

  .row .col-lg-3 {
    background-color: #333528 !important;
  }
}
</style>
