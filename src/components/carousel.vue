<template>
	<carousel :interval="5000" showControls showIndicators>
		
		<carousel-item img :src="require('@/assets/bg1.jpg')" alt="First carousel image">
			<carousel-caption title="blackblue #2" text="by emKay"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/bg2.jpg')" alt="Second carousel image">
			<carousel-caption title="friends" text="by emKay"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/bg3.jpg')" alt="Third carousel image">
			<carousel-caption title="hexane" text="by Nickelony & emKay"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/bg4.jpg')" alt="Fourth carousel image">
			<carousel-caption title="alley" text="by TheCatOfWar"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/bg5.jpg')" alt="Fifth carousel image">
			<carousel-caption title="angkor wat" text="by Nickelony"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/bg6.jpg')" alt="Sixth carousel image">
			<carousel-caption title="2010" text="by TheCatOfWar"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/bg7.jpg')" alt="Seventh carousel image">
			<carousel-caption title="mountains" text="by emKay"></carousel-caption>
		</carousel-item>
		<carousel-item img :src="require('@/assets/bg8.jpg')" alt="Eighth carousel image">
			<carousel-caption title="av2009" text="by Nickelony"></carousel-caption>
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