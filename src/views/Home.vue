<template>
  <div id="slider" class="glide">
    <h2 class="testimonials__title">Testimonials</h2>
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li is="SliderItem"
          v-for="testimonial in testimonialData"
          :key="testimonial.id"
          :testimonial="testimonial"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Glide from '@glidejs/glide'
    import SliderItem from '@/components/SliderItem'
    export default {
      name: 'slider',
      data () {
        return {
          testimonialData: [
            {
              id: 0,
              selected: false,
              userName: 'Vasya Pupkin',
              logoScr: 'https://www.google.com/search?q=user+icon&sxsrf=ALeKk02aG94O33ArqOD0EIT_U5Gkmpq2gw:1583490630986&tbm=isch&source=iu&ictx=1&fir=S1i-mUHhCy2-DM%253A%252Cf0GxkeMfG003gM%252C_&vet=1&usg=AI4_-kSGqmg5DcmZBQ0kpC9MadYEh61YAQ&sa=X&ved=2ahUKEwiVk8Kk0oXoAhXJGuwKHZvMDwgQ9QEwAHoECAoQHA#imgrc=Abzciaagz1e1wM',
              userInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, magni nemo eligendi voluptate perspiciatis iste minima dicta adipisci ratione. Dolores, minima. Culpa cupiditate sit quis facere voluptatem deserunt, quisquam aspernatur!'
            },
            {
              id: 1,
              selected: false,
              userName: 'Ivan Pupkin',
              logoScr: 'https://www.google.com/search?q=user+icon&tbm=isch&ved=2ahUKEwin0ITWu4XoAhVEsioKHevGBuEQ2-cCegQIABAA&oq=user+icon&gs_l=img.3..0i67j0j0i7i30l8.10198.10938..11788...0.0..0.286.704.1j3j1......0....1..gws-wiz-img.......0i19j0i7i30i19j0i10i19.sz3VaAwP24I&ei=kA5iXqfIMcTkqgHrjZuIDg&bih=789&biw=1440#imgrc=ZhfBxFvZ7AkRAM',
              userInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, magni nemo eligendi voluptate perspiciatis iste minima dicta adipisci ratione. Dolores, minima. Culpa cupiditate sit quis facere voluptatem deserunt, quisquam aspernatur!'
            },
            {
              id: 2,
              selected: false,
              userName: 'Yurek Pupkin',
              logoScr: 'https://www.google.com/search?q=user+icon&tbm=isch&ved=2ahUKEwin0ITWu4XoAhVEsioKHevGBuEQ2-cCegQIABAA&oq=user+icon&gs_l=img.3..0i67j0j0i7i30l8.10198.10938..11788...0.0..0.286.704.1j3j1......0....1..gws-wiz-img.......0i19j0i7i30i19j0i10i19.sz3VaAwP24I&ei=kA5iXqfIMcTkqgHrjZuIDg&bih=789&biw=1440#imgrc=ZhfBxFvZ7AkRAM',
              userInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, magni nemo eligendi voluptate perspiciatis iste minima dicta adipisci ratione. Dolores, minima. Culpa cupiditate sit quis facere voluptatem deserunt, quisquam aspernatur!'
            },
            {
              id: 3,
              selected: false,
              userName: 'Roma Pupkin',
              logoScr: 'https://www.google.com/search?q=user+icon&tbm=isch&ved=2ahUKEwin0ITWu4XoAhVEsioKHevGBuEQ2-cCegQIABAA&oq=user+icon&gs_l=img.3..0i67j0j0i7i30l8.10198.10938..11788...0.0..0.286.704.1j3j1......0....1..gws-wiz-img.......0i19j0i7i30i19j0i10i19.sz3VaAwP24I&ei=kA5iXqfIMcTkqgHrjZuIDg&bih=789&biw=1440#imgrc=ZhfBxFvZ7AkRAM',
              userInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, magni nemo eligendi voluptate perspiciatis iste minima dicta adipisci ratione. Dolores, minima. Culpa cupiditate sit quis facere voluptatem deserunt, quisquam aspernatur!'
            }
          ]
        }
      },
      mounted () {
        new Glide('.glide', {
          type: 'carousel',
          startAt: 0,
          perView: 1,
          focusAt: 'center',
          peek: 350,
          gap: 70
        }).mount()
      },
      components: {
        SliderItem
      }
    }
</script>

<style lang="scss">
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
  .testimonials__title {
    text-align: center;
    font-family: 'Lexia DaMa';
    font-size: 57px;
    line-height: 68px;
    text-align: center;
    color: #0E1D2C;
  }
</style>
