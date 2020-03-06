<template name="component-name">
  <div class="testimonial__logo-wrap">
    <img class="testimonial__logo" :src="userLogo"  alt="user-logo">
  </div>
</template>

<script>
    export default {
      props: ['userLogo']
    }
</script>

<style lang="scss">
  .testimonial__logo-wrap {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 95px;
    height: 95px;
    border: 1px solid red;
  }
  .testimonial__logo {
    width: 100%;
  }
</style>
