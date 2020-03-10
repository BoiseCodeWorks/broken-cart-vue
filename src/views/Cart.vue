<template>
  <div class="cart">
    <checkout />
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
