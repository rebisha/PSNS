<template>
<section id="floorplan" class="floorplan mb-5">
  <div class="container navbar-nav fonts">
    <div class="input-group-btn">
      <button type="button" class="btn btn-default">Precinct</button>
    </div>
    <div class="input-group-btn dropdown">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Floorplan</button>
        <div class="dropdown-menu fonts">
          <a class="dropdown-item" href="#">Type A</a>
          <a class="dropdown-item" href="#">Type B</a>
          <a class="dropdown-item" href="#">Type C</a>
          <a class="dropdown-item" href="#">Type D</a>
          <a class="dropdown-item" href="#">Type E</a>
          <a class="dropdown-item" href="#">Type F</a>
          <a class="dropdown-item" href="#">Type G</a>
          <a class="dropdown-item" href="#">Type H</a>
          <a class="dropdown-item" href="#">Type I</a>
          <a class="dropdown-item" href="#">Type J</a>
        </div>
    </div>
  </div>

  <app-carousel></app-carousel>
</section>
</template>

<script>
</script>

<style lang="scss">

.btn-default {
  padding: 20px 70px;
  border-radius: 0% !important;
  background-color: #3c3e2f;
  color: white;
  font-size: 1.1rem;

  &:focus {
    box-shadow: none !important;
    background-color: #52593f;
  }
}

.input-group-btn {
  padding-right: 10px;
}

.dropdown-menu.show {
  transform: none !important;
  top: 66px !important;
  border-radius: 0 !important;
  border: 0px !important;
  background-color: #3c3e2f;
  font-size: 1.1rem;
}

.dropdown-item {
  padding: 15px 87.2px;

  &:hover {
  background-color: #52593f !important;
  }
}
</style>
