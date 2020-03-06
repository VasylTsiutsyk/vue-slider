<template name="slider-item">
  <div class="testimonial-item">
    <li class="glide__slide">
      <SliderIcon :userLogo="testimonial.logoSrc"></SliderIcon>
      <h3 class="testimonial__username">{{testimonial.userName}}</h3>
      <p class="testimonial__user-info">{{testimonial.userInfo}}</p>
    </li>
  </div>
</template>

<script>
    import SliderIcon from '@/components/SliderIcon'
    export default {
      name: 'slider-item',
      props: ['testimonial'],
      components: {
        SliderIcon
      }
    }
</script>

<style lang="scss">
  .testimonial-item {
    position: relative;
    width: 700px;
    min-height: 300px;
    background-color: #3EADEC;
    margin: 70px 0;
    padding: 70px;
  }

  .testimonial__username {
    font-family: 'Montserrat, Arial';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
  }
  .testimonial__user-info {
    font-family: 'Montserrat, Arial';
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
  }
</style>
