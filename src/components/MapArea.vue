<template>
  <div class="container mt-6 mb-5" id="map">
    <h4 class="fonts text-center text-white pb-2"> Sunshine North </h4>
    <gmap-map v-bind:center= "center" v-bind:zoom= "14" class="gmap">

      <gmap-marker
        v-bind:key= "index"
        v-for="(m, index) in markers"
        v-bind:position= "m.position"
        v-bind:clickable= "true" v-if= "text" @click= "sayHello">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'Maps',
  data() {
    return {
      text: "hi",
      center: {lat: -37.773337, lng: 144.8420937},
      markers: [
        {
          position: {lat: -37.773337, lng: 144.7994246},
          title: 'Ace Karts',
          copy: 'As close as you get to pro racing without a fireproof suit.',
          image: 'src/assets/media/Pace1.jpg'
        },
        {
          position: {lat: -37.7940247, lng: 144.8731643},
          title: 'Dumbo Cafe',
          image: 'src/assets/media/Pace1.jpg',
          copy: 'Hidden in a quiet residential street, Dumbo milk bar has a brunch focused menu and serves locally roasted coffee.'
        },
        {
          position: {lat: -37.7823236, lng: 144.8313829},
          title: 'Sunshine Plaza',
          image: 'src/assets/media/Pace1.jpg',
          copy: 'With a prime main street presence, Sunshine Plaza features over 35 retailers including a supermarket, gymnasium and medical centre.'
        },
        {
          position: {lat: -37.7901967, lng: 144.8161033},
          title: 'Sunshine Social',
          image: '',
          copy: 'Nothing beats good local produce cooked over smoking hot charcoal. Sunshine Social’s flavours are as diverse as Sunshine itself, with something for everyone.'
        },
        {
          position: {lat: -37.8006557, lng: 144.8998645},
          title: 'Footscray Market',
          image: '',
          copy: 'A large indoor retail market with a wide range of fresh, affordable produce and general goods, conveniently located opposite Footscray Train Station.'
        },
        {
          position: {lat: -37.794917, lng: 144.7737511},
          title: 'Sunshine golf course',
          image: '',
          copy: 'Large golf course including a Modern clubhouse with lounge, bar, restaurant and functions room with magnificent city views.'
        },
        {
          position: {lat: -37.8006557, lng: 144.8488464},
          title: 'Quang Minh Buddhist Temple',
          image: '',
          copy: 'One of the most significant Buddhist institutes in Australia, featuring a new shrine, meditation huts and a Community Services Centre with additional training facilities.'
        },
        {
          position: {lat: -37.7880381, lng: 144.8325721},
          title: 'Sunshine Station',
          image: '',
          copy: 'Public transport in the area takes you straight to Melbourne CBD and beyond.'
        },
        {
          position: {lat: -37.7594546, lng: 144.8141586},
          title: 'Sunshine Hospital',
          image: '',
          copy: 'A large local public hospital currently undergoing construction to meet the demands of the growing population.'
        },
        {
          position: {lat: -37.7713694, lng: 144.8355283},
         title: 'Sunshine North Primary School',
          image: '',
          copy: 'A small close knit primary school actively promoting a strong sense of community partnership.'
        },
        {
          position: {lat: -37.778109, lng: 144.848467},
          title: 'Braybrook College',
          image: '',
          copy: 'A proudly multicultural, single campus school with a strong academic reputation offering extensive programs from Years 7 to 12.'
        },
        {
          position: {lat: -37.7936887, lng: 144.8965453},
          title: 'Vic Uni, Footscray Campus',
          image: '',
          copy: 'The oldest and largest of all Vic Uni campuses, the Footscray campus includes fantastic facilities and is located next to parklands along the Maribyrnong River.'
        },
        {
          position: {lat: -37.7901967, lng: 144.8161033},
          title: 'Solomon Ford',
          image: '',
          copy: 'A natural basalt stone ford crossing of the Maribyrnong River, first charted in 1803 during exploration of Port Phillip Bay.'
        },
        {
          position: {lat: -37.7698137, lng: 144.8497338},
          title: 'Maribyrnong River Trail',
          image: '',
          copy: 'A shared use path for cyclists and pedestrians, which follows the Maribyrnong River through the north western suburbs, with plans to be extended through the Pace of Sunshine North site.'
        },
        {
          position: {lat: -37.766935, lng: 144.849695},
          title: 'Pace Sunshine North Display Suite',
          image: '',
          copy: '322 Duke Street, Sunshine North'
        }
      ]
    }
  },
  methods: {
    sayHello: function() {
     return alert("hello, " + this.markers[0].title + this.center.lat);

    }
  }
}
</script>

<style lang="scss">
  .gmap {
    height: 790px;
  }

  .marker-label {
    width: 36%;
    height: auto;
    background-color: white;
  }

  .info-content {
    color: #333528;
    padding: 10px 0 10px 5px;
    display: flex;
    align-items: center;
    min-height: 80px;
    max-width: 380px;
    font-family: "Apercu", sans-serif;
    font-size: 16px;
  }

  .para {
    padding-left: 20px;
  }
</style>

