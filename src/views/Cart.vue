<template>
  <div class="cart">
    <div class="container">
      <div class="row">
        <div class="col">HEY YOU1</div>
        <div class="col">HEY YOU2</div>
        <div class="col">HEY YOU3</div>
      </div>
      <div class="row">
        <div class="col-12">
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <checkout />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkout from "@/components/Checkout.vue";

export default {
  name: "cart",
  components: {
    Checkout
  }
};
</script>
