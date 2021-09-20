<template>
  <div>
    <inventory />
    <hr />
    <div class="v-exercises">
      <div>
        <h1>My BɼokƏn Cart!</h1>
        <!-- FIXME show the actual number of items in the cart -->
        <p>Total Items added to your Cart ({{ 0 }})</p>
        <hr />

        <!-- FIXME only show this message if there are no items in the cart -->
        <p class="alert alert-warning">
          You have no items in your cart... Buy something!
        </p>
        <!-- FIXME only show this table if there are items in the cart -->
        <table class="table">
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
              <td>{{ item.name }}</td>
              <td>{{ item.color }}</td>
              <td>{{ item.size }}</td>
              <td>
                <!-- FIXME NEVER ALLOW NEGATIVE NUMBERS -->
                <input type="number" v-model="item.quantity" />
              </td>
              <td>{{ $filters.currencyUSD(item.price * item.quantity) }}</td>
              <td>
                <!-- FIXME This button doesnt work -->
                <button class="btn btn-xs btn-danger" @click="removeItem(item)">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right">
                Total:
              </td>
              <td colspan="2">
                {{ $filters.currencyUSD(cartTotal) }}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
export default {
  setup() {
    return {
      cart: computed(() => AppState.cart),
      inventory: computed(() => AppState.inventory),
      // FIXME FIX THE COMPUTED TO SHOW THE ACTUAL TOTAL
      cartTotal: computed(() => 0),
      removeItem(item) {
      /* FIXME
       * This function should use the cartService to remove
       * the passed in item from the cart.
       */
      }
    }
  }
}
</script>

<style scoped>
</style>
