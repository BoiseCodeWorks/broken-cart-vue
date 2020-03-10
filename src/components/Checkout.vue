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
                <input type="number" v-model="item.quantity" />
              </td>
              <!-- TODO NEVER ALLOW NEGATIVE NUMBERS -->
              <td>${{ item.price * item.quantity }}</td>
              <td>
                <button class="btn btn-xs btn-danger" @click="removeItem(item)">&times;</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right">Total:</td>
              <td colspan="2">${{cartTotal}}</td>
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
      cart: {
        items: [
          {
            itemId: "123",
            name: "A BɼokƏn ITEM",
            color: "red",
            size: "L",
            price: 10,
            quantity: -50
          },
          {
            itemId: "1223",
            name: "Another BɼokƏn ITEM",
            color: "YOU SHOULD REALLY FIX THOSE BAD NUMBERS",
            size: "L",
            price: 16.74,
            quantity: 5
          }
        ]
      }
    };
  },
  computed: {
    inventory() {
      return this.$store.state.inventory;
    },
    cartTotal() {
      // TODO FIX THE COMPUTED TO SHOW THE ACTUAL TOTAL
      return 0;
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
    }
  },
  components: {
    inventory
  }
};
</script>

<style scoped>
</style>