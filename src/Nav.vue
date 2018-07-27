<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
    <div class="col-lg-3">
      <a href="#" target="_blank">
        <img class="logo-img" src="./assets/logo1.png" width="20%">
        <span class="font"> of Sunshine North </span>
      </a>
    </div>

    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="col-lg-6 text-center">
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#values">Our Values</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#benefits">Benefits</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#streamline">Streamlines</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#stories">Our Stories</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-2 offset-lg-1 bg-yellow">
      <h4>Enquiry </h4>
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
</style>
