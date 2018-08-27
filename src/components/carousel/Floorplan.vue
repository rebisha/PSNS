<template>
<section id="floorplan" class="floorplan mt-6">
  <div class="container navbar-nav fonts">
    <div class="input-group-btn">
      <button type="button" class="btn btn-default">Precinct</button>
    </div>
    <div class="input-group-btn dropdown">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Floorplan</button>
        <div class="dropdown-menu fonts">
          <a class="dropdown-item" @click= "editAge">Type A</a>
          <a class="dropdown-item" @click= "editAge">Type B</a>
          <a class="dropdown-item" @click= "editAge">Type C</a>
          <a class="dropdown-item" @click= "editAge">Type D</a>
          <a class="dropdown-item" @click= "editAge">Type E</a>
          <a class="dropdown-item" @click= "editAge">Type F</a>
          <a class="dropdown-item" @click= "editAge">Type G</a>
          <a class="dropdown-item" @click= "editAge">Type H</a>
          <a class="dropdown-item" @click= "editAge">Type I</a>
          <a class="dropdown-item" @click= "editAge">Type J</a>
        </div>
    </div>
  </div>

  <!-- <app-carousel :name= "name"></app-carousel> -->
</section>
</template>

<script>
import { eventBus } from '../../main';

export default {
  name: 'Floorplan',
  props: ['userAge'],
  methods: {
    editAge: function() {
      this.userAge = 30;
      /* this.$emit('ageWasEdited', this.userAge); //need this one in order for the child component to listen from the parent component */
      eventBus.$emit('ageWasEdited', this.userAge);
    }
  }
}
</script>

<style lang="scss" >

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
