<template>
  <div class="shopping-item rounded" :class="{'out-of-stock': item.stock <= 0}">
    <!--TODO out the view to make the price of the item display as currency by using a filter-->
    <p class="item-price">{{item.price | currency}}</p>
    <p class="item-name">{{item.name}}</p>
    <img class="img-fluid" :src="item.img" />
    <div class>
      <select class="form-control" v-model="itemOptions.color">
        <option selected disabled value>--Color--</option>
        <option v-for="color in item.colors" :key="color.name">{{color.name}}</option>
      </select>
      <select class="form-control" v-model="itemOptions.size">
        <option selected disabled value>--Size--</option>
        <option v-for="size in item.sizes" :key="size">{{size}}</option>
      </select>
      <input
        class="form-control"
        type="number"
        v-model="itemOptions.quantity"
        :placeholder="item.stock <=0 ? 'OUT OF STOCK': 'quantity'"
        min="1"
        :max="item.stock"
      />
    </div>
    <button
      class="btn btn-xs btn-primary"
      :disabled="!itemOptions.color || !itemOptions.size"
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
       * let newItem = {
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
      let newItem = {
        itemId: item.id,
        price: item.price,
        name: item.name,
        quantity: Number(this.itemOptions.quantity),
        color: this.itemOptions.color,
        size: this.itemOptions.size
      };
      console.log("DID WE MAP IT CORRECTLY?", newItem);
      this.$store.dispatch("addItemToCart", newItem);
      this.itemOptions = {};
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
  &.out-of-stock {
    user-select: none;
    pointer-events: none;
    color: red !important;
    filter: grayscale(1);
  }
}
</style>