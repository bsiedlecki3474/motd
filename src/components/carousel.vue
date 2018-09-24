<template>
	<carousel :interval="5000" showControls showIndicators>
		
		<carousel-item img :src="require('@/assets/1.jpg')" alt="First carousel image">
			<carousel-caption title="map name here" text="author"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/2.jpg')" alt="Second carousel image">
			<carousel-caption title="map name here" text="author"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/3.jpg')" alt="Third carousel image">
			<carousel-caption title="map name here" text="author"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/4.jpg')" alt="Fourth carousel image">
			<carousel-caption title="map name here" text="author"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/5.jpg')" alt="Fifth carousel image">
			<carousel-caption title="map name here" text="author"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/6.jpg')" alt="Sixth carousel image">
			<carousel-caption title="map name here" text="author"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/7.jpg')" alt="Seventh carousel image">
			<carousel-caption title="map name here" text="author"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/8.jpg')" alt="Eighth carousel image">
			<carousel-caption title="map name here" text="author"></carousel-caption>
		</carousel-item>
		
	</carousel>
</template>

<script>

import { Carousel, CarouselItem, CarouselCaption } from 'mdbvue';
export default {
  name: 'CarouselPage',
  components: {
    Carousel,
    CarouselItem,
	CarouselCaption
  }
};
</script>

<style scoped>

</style>