<template>
	<mdb-carousel :interval="5000" showControls showIndicators>
		
		<mdb-carousel-item img :src="require('@/assets/bg1.jpg')" alt="First carousel image">
			<mdb-carousel-caption title="blackblue #2" text="by emKay"></mdb-carousel-caption>
		</mdb-carousel-item>
		<mdb-carousel-item img :src="require('@/assets/bg2.jpg')" alt="Second carousel image">
			<mdb-carousel-caption title="friends" text="by emKay"></mdb-carousel-caption>
		</mdb-carousel-item>
		<mdb-carousel-item img :src="require('@/assets/bg3.jpg')" alt="Third carousel image">
			<mdb-carousel-caption title="hexane" text="by Nickelony & emKay"></mdb-carousel-caption>
		</mdb-carousel-item>
		<mdb-carousel-item img :src="require('@/assets/bg4.jpg')" alt="Fourth carousel image">
			<mdb-carousel-caption title="alley" text="by TheCatOfWar"></mdb-carousel-caption>
		</mdb-carousel-item>
		<mdb-carousel-item img :src="require('@/assets/bg5.jpg')" alt="Fifth carousel image">
			<mdb-carousel-caption title="angkor wat" text="by Nickelony"></mdb-carousel-caption>
		</mdb-carousel-item>
		<mdb-carousel-item img :src="require('@/assets/bg6.jpg')" alt="Sixth carousel image">
			<mdb-carousel-caption title="2010" text="by TheCatOfWar"></mdb-carousel-caption>
		</mdb-carousel-item>
		<mdb-carousel-item img :src="require('@/assets/bg7.jpg')" alt="Seventh carousel image">
			<mdb-carousel-caption title="mountains" text="by emKay"></mdb-carousel-caption>
		</mdb-carousel-item>
		<mdb-carousel-item img :src="require('@/assets/bg8.jpg')" alt="Eighth carousel image">
			<mdb-carousel-caption title="av2009" text="by Nickelony"></mdb-carousel-caption>
		</mdb-carousel-item>
		
	</mdb-carousel>
</template>

<script>

import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue';
export default {
  name: 'CarouselPage',
  methods: {
	getImgUrl(pic) {
		return require('../assets/'+pic+'.jpg');
	}
  },
  components: {
    mdbCarousel,
    mdbCarouselItem,
	mdbCarouselCaption
  },
  data() {
	  return {

  	}
  }
};
</script>

<style>

.margins {
    margin-top: 5%;
    margin-bottom: 2.5%;
}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	/*.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}*/

</style>