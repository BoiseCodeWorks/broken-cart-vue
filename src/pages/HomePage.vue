<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="readme home-card card p-5">
      <h1>Help Fix this Cart</h1>
      <p>What we have here is a broken website. There are a few challenges we need to solve to get it working.</p>
      <p>use the comments in the component file as guides. Following these clues, you should be able to get this cart back into top notch condition.</p>

      <p>First things first, switch over to the cart page and then open the checkout component.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      width: 200px;
    }
  }
}
</style>
