<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
    <div class="col-lg-2">
      <a href="#" v-scroll-to="'#headerBody'" target="_blank">
        <img class="logo-img" src="../assets/media/logo1.png" width="20%">
        <span class="font"> of Sunshine North </span>
      </a>
    </div>

    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="col-lg-9 text-center">
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
           <a class="nav-link js-scroll-trigger" href="#" v-scroll-to="'#project'">The project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#" v-scroll-to="'#gallery'">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#" v-scroll-to="'#floorplan'">Floorplans</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#" v-scroll-to="'#map'">Sunshine North</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#" v-scroll-to="'#info'">Investor information</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#" v-scroll-to="'#theTeam'">The team</a>
          </li>
        </ul>
      </div>
    </div>
      <!-- <h4 class="text-center">Enquiry </h4> -->
      <button type="submit" class="submit-button" v-scroll-to="'#enquiry'">Enquiry </button>

  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">
#mainNav {
  background-color: #37392b;
}

.logo-img {
  padding-top: 5px;
}

span {
  font-size: 26px;
  vertical-align:top;
}

.navbar-expand-lg .navbar-collapse {
    display: inline-block !important;
}

button {
  border: none;
  padding: 20px;
  cursor: pointer;
  width: 10%;
  letter-spacing: .02em;
  font-weight: bold;
  background: #ffc107;;
  color: #3c401c;
  text-decoration: none;
  transition: .5s;

  &:focus {
    outline: none !important;
  }
}
</style>
