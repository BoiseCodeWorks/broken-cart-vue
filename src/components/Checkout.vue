<template>
  <div>
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
                <input type="number" v-model="quantity" />
              </td>
              <!--HElP out the view to make the price of this item display as currency by using a filter-->
              <td>{{item.price * item.quantity}}</td>
              <td>
                <button class="btn btn-xs btn-warning" @click="removeItem(item)">&times;</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right">Total:</td>
              <!--FIX THE COMPUTED TO SHOW THE ACTUAL TOTAL-->
              <td colspan="2">{{cartTotal}}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <hr />
      <inventory />
    </div>
  </div>
</template>

<script>
import inventory from "./Inventory";
export default {
  name: "Checkout",
  data() {
    return {
      cart: {
        items: [
          {
            itemId: "123",
            name: "I DONT EXIST",
            color: "red",
            size: "L",
            price: 10,
            quantity: 1
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
      return 0;
    }
  },
  methods: {
    removeItem() {
      // Item gets passed in from our view when the user clicks the x button
      /*
       * This function should be able to remove the passed in item
       * from our cart. You will have to first identify where the passed
       * in item is in the array. Then you will need to use the correct
       * Array.method to remove 1 item ... hint: method(i, 1)
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