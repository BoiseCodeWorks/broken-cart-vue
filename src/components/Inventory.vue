<template>
  <div class="container mb-5">
    <h1>Store Inventory</h1>
    <div class="row">
      <div v-for="item in inventory" :key="item.id" class="col-sm-4">
        <item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "Inventory",
  computed: {
    inventory() {
      return this.$store.state.inventory;
    }
  },
  components: {
    Item
  }
};
</script>

<style>
</style>