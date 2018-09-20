<template>
	<carousel :interval="5000" showControls showIndicators>
		<!--
		<carousel-item img src="../assets/1.jpg" alt="First slide" />
		<carousel-item img src="../assets/2.jpg" alt="Second slide" />
		<carousel-item img src="../assets/3.jpg" alt="Third slide" />
		<carousel-item img src="../assets/4.jpg" alt="Fourth slide" />
		<carousel-item img src="../assets/5.jpg" alt="Fifth slide" />
		<carousel-item img src="../assets/6.jpg" alt="Sixth slide" />
		<carousel-item img src="../assets/7.jpg" alt="Seventh slide" />
		<carousel-item img src="../assets/8.jpg" alt="Eighth slide" />
		-->

		<carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Alt slide">
		<carousel-caption title="Carousel Caption" text="First text"></carousel-caption>
		</carousel-item>
		<carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Alt slide">
		<carousel-caption title="Carousel Caption" text="Second text"></carousel-caption>
		</carousel-item>
		<carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="Alt slide">
		<carousel-caption title="Carousel Caption" text="Third text"></carousel-caption>
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