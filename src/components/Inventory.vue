<template>
  <div class="container">
    <div class="row">
      <!--
        - If you were to look at the component you would notice
        - we have a propety called items which is an array. 
        - Using the Vue v-for directive you will be able to
        - Render each item in the list on the page 
        - Remember that v-for syntax is similar to a (for in loop)
        - Where the first word represents an entire object similarly to the .forEach(function(item))
        - ** hint: be sure to use item as the first word
      -->
      <!-- PUT YOUR V-FOR IN THIS DIV -->
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