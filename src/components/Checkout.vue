<template>
  <div>
    <inventory />
    <hr />
    <div class="v-exercises">
      <div>
        <h1>My BɼokƏn Cart!</h1>
        <p>Items added to your Cart ({{cart.items.length}})</p>
        <hr />

        <p
          class="alert alert-warning"
          v-show="cart.items.length < 1"
        >You have no items in your cart... Buy something!</p>
        <table class="table" v-if="cart.items.length > 0">
          <thead>
            <tr>
              <th>Item</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.items" :key="item.itemId">
              <td>{{item.name}}</td>
              <td>{{item.color}}</td>
              <td>{{item.size}}</td>
              <td>
                <input type="number" v-model="item.quantity" min="1" />
              </td>
              <!-- TODO NEVER ALLOW NEGATIVE NUMBERS -->
              <td>{{ item.price * item.quantity | currency }}</td>
              <td>
                <button class="btn btn-xs btn-danger" @click="removeItem(item)">&times;</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right">Total:</td>
              <td colspan="2">{{ cartTotal | currency }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import inventory from "./Inventory";
export default {
  name: "Checkout",
  data() {
    return {
      // TODO Move the cart item to the store
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    inventory() {
      return this.$store.state.inventory;
    },
    cartTotal() {
      // TODO FIX THE COMPUTED TO SHOW THE ACTUAL TOTAL
      let total = 0;
      this.cart.items.forEach(item => (total += item.price * item.quantity));
      return total;

      // return this.cart.items.reduce(
      //   (total, item) => (total += item.price * item.quantity),
      //   0
      // );
    }
  },
  methods: {
    removeItem(item) {
      // TODO
      // Item gets passed in from our view when the user clicks the x button
      /*
       * This function should be able to remove the passed in item
       * from our cart.
       */
      this.$store.dispatch("removeItem", item);
    }
  },
  components: {
    inventory
  }
};
</script>

<style scoped>
</style>