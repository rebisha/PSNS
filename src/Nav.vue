<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
    <div class="col-lg-2">
      <a href="#" target="_blank">
        <img class="logo-img" src="./assets/media/logo1.png" width="20%">
        <span class="font"> of Sunshine North </span>
      </a>
    </div>

    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="col-lg-8 text-center">
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
           <a class="nav-link js-scroll-trigger" href="">The project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#benefits">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#streamline">Floorplans</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#stories">Sunshine North</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#stories">Investor information</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#stories">The team</a>
          </li>
          <li class="nav-item">
            <router-link to="/gallery">Test</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="offset-lg-1 col-lg-2 bg-yellow enquiry">
      <h4 class="text-center">Enquiry </h4>
    </div>

  </nav>
</template>

<script>
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

.col-lg-2.enquiry {
  max-width: 10% !important;
  border: 10px solid #ffc107;
}

@media (min-width: 992px){
  .offset-lg-1.enquiry {
    margin-left: 7% !important;
  }
}
</style>
