<template>
  <div class="shopping-item rounded">
    <!--TODO out the view to make the price of the item display as currency by using a filter-->
    <p class="item-price">
      {{ $filters.currencyUSD(item.price) }}
    </p>
    <p class="item-name">
      {{ item.name }}
    </p>
    <img class="img-fluid" :src="item.img" />
    <div class>
      <select class="form-control" v-model="itemOptions.color">
        <option selected disabled value>
          --Color--
        </option>
        <option v-for="color in item.colors" :key="color.name">
          {{ color.name }}
        </option>
      </select>
      <select class="form-control" v-model="itemOptions.size">
        <option selected disabled value>
          --Size--
        </option>
        <option v-for="size in item.sizes" :key="size">
          {{ size }}
        </option>
      </select>
      <input
        class="form-control"
        type="number"
        v-model="itemOptions.quantity"
        placeholder="quantity"
        min="1"
        :max="item.stock"
      />
    </div>
    <button
      class="btn btn-primary my-3"
      @click="addItemToCart(item)"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  },
  setup() {
    return {
      itemOptions: {
        color: '',
        size: ''
      },
      addItemToCart(item) {
        // FIXME Implement this function
        // item gets passed in to this function from the view
        // use the cartService to add the item
      }
    }
  },
  methods: {
  }
}
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
