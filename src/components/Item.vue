<template>
  <div class="shopping-item rounded">
    <!--HElP out the view to make the price of the item display as currency by using a filter-->
    <p class="item-price">{{item.price}}</p>
    <p class="item-name">{{item.name}}</p>
    <img class="img-fluid" :src="item.img" />
    <div class>
      <select class="form-control" v-model="itemOptions.color">
        <option selected disabled value>--Color--</option>
        <option v-for="color in item.colors" :key="color.name">{{color}}</option>
      </select>
      <select class="form-control" v-model="itemOptions.size">
        <option selected disabled value>--Size--</option>
        <option v-for="size in item.sizes" :key="size">{{size}}</option>
      </select>
    </div>
    <button
      class="btn btn-xs btn-primary"
      :disabled="!item.selectedColor || !item.selectedSize"
      @click="addItemToCart(item)"
    >Add</button>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: { type: Object, required: true }
  },
  data() {
    return {
      itemOptions: {
        color: "",
        size: ""
      }
    };
  },
  methods: {
    addItemToCart(item) {
      // TODO Implement this function
      // item gets passed in to this function from the view
      /*
       * Our cart demands that items being added to it must have the following properties
       * var newItem = {
       *   itemId:     "",
       *   name:       "",
       *   color:      "",
       *   size:       "",
       *   price:      10,
       *   quantity:    1,
       * }
       * console.log the item being passed in from the view
       * to figure out which properties from the item need to be
       * re-maped to the newItem object.
       * After building the newItem, add it to the cart.
       * If the item already exists in the cart only increase the quantity of the existing item
       * DO NOT push the same item twice
       */
    }
  }
};
</script>

<style lang="scss">
.shopping-item {
  padding: 20px;
  background-color: lightslategray;
  text-align: center;
  .item-name {
    color: white;
    text-align: center;
    font-weight: bold;
  }
  select {
    margin: 5px;
  }
  img {
    margin: 10px 0;
    width: 100px;
    height: 100px;
  }
  .item-price {
    color: yellow;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>