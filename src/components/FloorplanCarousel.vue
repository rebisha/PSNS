/* This is the parent component and it's child components are Floorplan.vue and ImageCarousel.vue */

<template>
<section>
  <button  @click= "changeName"> Submit </button>
  <app-floorplan :userAge= "age" @ageWasEdited= "age = $event"></app-floorplan> <!--use the $emit listener to listen from one child component and edit in the other child component-->
  <app-carousel :name= "name" :userAge= "age"></app-carousel>
</section>
</template>

<script>
import Floorplan from './carousel/Floorplan.vue';
import ImageCarousel from './carousel/ImageCarousel.vue';

export default {
  components: {
    'app-floorplan': Floorplan,
    'app-carousel': ImageCarousel
  },
  name: 'FloorplanCarousel',
  data: function() {
    return {
      name: 'Rebisha',
      age: 27
    }
  },
  methods: {
    changeName() {
      this.name = "Anna";
    }
  }
}
</script>

<style lang="scss">

</style>

