<template>
<div id="slider">
  <transition-group tag="div" :name="transitionName" class="slides-group">
    <div v-if="show" :key="current" class="slide" :class="slides[current].className">
      <h4>Type A - {{slides[current].className.split("-").join(" ")}}</h4>
      <br>
      <p> More detailed façade information can be provided in the display suite </p>
      <!-- <h1>Username: {{ name }} <br>
      age: {{ userAge }}</h1> -->
    </div>
  </transition-group>
  <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
    &#10094;
  </div>
  <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
    &#10095;
  </div>

</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { eventBus } from '../../main';

export default {
  components: {
    Carousel,
    Slide
  },
  name: "Slider",

  props: ['name', 'userAge'],

  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        { className: "Ground-floor" },
        { className: "First-floor" },
        { className: "Second-floor" }
      ]
    }
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    }
  },
  mounted() {
    this.show = true;
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Crimson+Text");

h4 {
  position: absolute;
  top: 50px;
}

p {
  position: absolute;
  bottom: 20px;
}

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.Ground-floor {
  background-image: url('../../assets/media/floorplan/plan-a-view-1.jpg');
}

.First-floor {
  background-image: url('../../assets/media/floorplan/plan-a-view-2.jpg');
}

.Second-floor {
  background-image: url('../../assets/media/floorplan/plan-a-view-3.jpg');
}

/* SLIDER STYLES */
body {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}

#slider {
  width: 100%;
  height: 60vh;
  position: relative;
  background-color: #e4e7dc;
}

.slide {
  width: 62%;
  height: 60vh;
  position: absolute;
  top: 0;
  left: 23em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}
</style>
