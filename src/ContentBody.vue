<template>
<section class="mb-5 bg-primary" id="values">
  <div class="col-lg-12 text-center">
    <img style="margin-top: 3.2rem;" src="./assets/logo1.png">&nbsp;
    <span class="logo font"> of
    <br>
    Sunshine North </span>
    <p class="text-white fonts">Duke Street, Sunshine North</p>

    <p class="text-yellow fonts"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br>
    Praesent aliquam, metus luctus tristique suscipit, lectus felis maximus
    <br>
    magna, sit amet ultricies felis sapien id purus.
    </p>

    <p class="text-white fonts"> Display Suite
    <br>
    XX Duke Street, Sunshine North </p>
  </div>

  <div class="col-lg-12 text-center">
    <h4 class="text-white"> Now Selling </h4>
  </div>

  <div class="row pb-5 pt-5">
    <div class="floorplan-section">
      <img src="./assets/rect x 580.png">
      <div class="floorplan-content text-white text-center fonts">
        <h4> 3 Bed, 2 Bath
        <br>
        apartment </h4>
        Starting from $XXX,XXX
        <br>
        <button class="btn btn-floorplan text-white mt-4"> See Floorplan </button>
      </div>
    </div>

    <div class="floorplan-section">
      <img src="./assets/rect x 580.png">
      <div class="floorplan-content text-white text-center fonts">
        <h4> 3 Bed, 2 Bath
        <br>
        apartment </h4>
        Starting from $XXX,XXX
        <br>
        <button class="btn btn-floorplan text-white mt-4"> See Floorplan </button>
      </div>
    </div>

    <div class="floorplan-section">
      <img src="./assets/rect x 580.png">
      <div class="floorplan-content text-white text-center fonts">
        <h4> 3 Bed, 2 Bath
        <br>
        apartment </h4>
        Starting from $XXX,XXX
        <br>
        <button class="btn btn-floorplan mt-4 active"> See Floorplan </button>
      </div>
    </div>

    <div class="floorplan-section">
      <img src="./assets/rect x 580.png">
      <div class="floorplan-content text-white text-center fonts">
        <h4> 3 Bed, 2 Bath
        <br>
        apartment </h4>
        Starting from $XXX,XXX
        <br>
        <button class="btn btn-floorplan text-white mt-4"> See Floorplan </button>
      </div>
    </div>
  </div>

  <div class="col-lg-12 text-center">
    <h4 class="text-white"> The project </h4>
  </div>

  <div class="container">
    <div class="row pt-5">
      <div class="col-lg-6">
        <img src="./assets/rect x 692.png">
      </div>

      <div class="col-lg-6 text-white font pt-6">
        <h1>Lorem ipsum dolor sit amedar.</h1>
        <br>
        <p class="fonts">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel placerat sapien. Maecenas et augue quis ante dapibus ornare quis at augue. mauris et enim suscipit, lacinia nibh ut, tempus arcu.
        Pellentesque id dapibus sapien, sit amet tempus elit. Curabitur id turpis vitae justo euismod faucibus. </p>
      </div>
    </div>

    <div class="row pt-6">
      <div class="col-lg-6 text-white font pt-5">
        <h1>Lorem ipsum dolor sit amedar.</h1>
        <br>
        <p class="fonts">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel placerat sapien. Maecenas et augue quis ante dapibus ornare quis at augue. mauris et enim suscipit, lacinia nibh ut, tempus arcu.
        Pellentesque id dapibus sapien, sit amet tempus elit. Curabitur id turpis vitae justo euismod faucibus. </p>
      </div>

      <div class="col-lg-6">
        <img src="./assets/rect x 692.png">
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

  &:focus {
    box-shadow: none !important;
  }
}

.floorplan-section {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.floorplan-content {
 position: absolute;
  top: 20%;
  left: 25%;
  width: 50%;
}
</style>
