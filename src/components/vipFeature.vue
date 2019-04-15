<template>
    <div class="container-fluid margins">

        <h1 class="h1 text-center navbarfixer" id="motd"> VIP features </h1>
        <h6 class="h6 text-center"> What benefits provides a VIP? </h6>

        <h4 class="h4 margins"> As a VIP on our server, you have access to: </h4>

        <ol>

            <li> Custom knife skins menu with extremely detailed, self-made skins </li>

            <li> Trail menu with various styles of trails </li>

            <li> Changeable FOV </li>

            <li> Exclusive 'VIP' tag set before your nickname </li>

            <li> A slot reserved especially for you </li>

        </ol>

        <h4 class="h4 margins"> Trails </h4>
        <div class="row justify-content-center">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center bannerimage">
                <img :src="require('@/assets/trail.jpg')" id="trailimage">
            </div>
        </div>

        <h4 class="topmargins"> Our server provides various trail colors supported by custom plugin. </h4>
        <p> You can choose from different types such as 'Spectrum' or 'Wave (in the picture)' or just select a solid color one. </p>

        <h4 class="h4 margins"> VIP Menu </h4>
        <div class="row justify-content-center">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center bannerimage">
                <img :src="require('@/assets/vipmenu.jpg')" id="vipimage">
            </div>
        </div>

        <h4 class="topmargins"> Here you can see the menu available at !vip command. </h4>
        <p> Menu itself should be clear and simple - that's why all the VIP features are listed at one menu page. </p>

        <h2 class="h2 topmargins"> How do I buy a VIP? </h2>

        <h4 class="topmargins"> If everything is clear for you </h4>
        <p> The button below will redirect you straight into the website where you can order a VIP package. </p>

        <button id="buy" class="btn btn-elegant" onClick="window.open('https://store.minespace.net/')">Visit the store</button>

    </div>
</template>

<script>

import {  } from 'mdbvue'

export default {
  methods: {
        redirect(link) {
            return window.open(link);
        }
  },
  components: {
      
  },
  created() {

  },
  data() {
      return {
          
      }
  }
}
</script>

<style scoped>

.margins {
    margin-top: 5%;
    margin-bottom: 2.5%;
}

.topmargins {
    margin-top: 5%;
}

.bottommargins {
    margin-bottom: 5%;
}

.navbarfixer {
    padding-top: 75px;
}

#send {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    display: block;
}

.imagesdiv {
    padding: 2px !important;
    margin: 0;
}

.bannerimage {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    height: 50vh;
    width: 100%;
    overflow: hidden;
}

.bannerimage img {
    position: absolute;
}

@media screen and (max-width: 768px) {
    .bannerimage #trailimage {
        left: -400px;
    }
}

@media screen and (min-width: 768px) {
    .bannerimage img {
        width: 100%;
    }
}




@media screen and (min-width: 992px) {
    .bannerimage #vipimage {

        top: -100px;
    }
}


#trailimage {
    background: url('../assets/trail.jpg') no-repeat center/cover;
}

#vipmenuimage {
    background: url('../assets/vipmenu.jpg') no-repeat center/cover;
}

</style>