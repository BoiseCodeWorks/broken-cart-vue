import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inventory: [
      {
        id: "1001",
        name: "T-Shirt",
        colors: [{ name: "White" }, { name: "Blue" }, { name: "Green" }, { name: "Black" }],
        sizes: ["S", "M", "L", "XL"],
        price: 6.79,
        img: "https://www.BROKEDLINK.com/BROKED.png",
        stock: 5
      },
      {
        id: "1002",
        name: "Bowling Ball",
        colors: [{ name: "Red" }, { name: "Blue" }, { name: "Purple" }, { name: "Black" }],
        sizes: ["8 lb", "10 lb", "12 lb", "14 lb"],
        price: 27.79,
        img: "http://cliparts.co/cliparts/kiK/B8E/kiKB8E8oT.png",
        stock: 100
      },
      {
        id: "1003",
        name: "Pirate Cap With Patch",
        colors: [{ name: "Red" }, { name: "Blue" }, { name: "Pink" }, { name: "Black" }],
        sizes: ["S"],
        price: 1299.99,
        img: "http://www.clipartbest.com/cliparts/aTe/RjM/aTeRjM7T4.png",
        stock: 0
      }
    ],
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
  },
  mutations: {
    // TODO you will need to add and remove items from your cart here
    addItemToCart(state, item) {
      state.cart.items.push(item);
    },
    updateQuantity(state, { item, quantity }) {
      item.quantity += quantity;
    },
    updateStock(state, { inventoryItem, quantity }) {
      inventoryItem.stock -= quantity;
    },
    removeItem(state, item) {
      let i = state.cart.items.findIndex(i => i.itemId == item.itemId);
      if (i == -1) { return; }
      state.cart.items.splice(i, 1);
    }
  },
  actions: {
    async addItemToCart({ dispatch, commit, state }, item) {
      // TODO call the server to do a thing
      // BL happens here

      let found = state.cart.items.find(i => i.itemId == item.itemId);
      if (found) {
        commit("updateQuantity", { item: found, quantity: item.quantity });
      } else {
        commit("addItemToCart", item);
      }
      let inventoryItem = state.inventory.find(i => i.id == item.itemId);
      commit("updateStock", { inventoryItem, quantity: item.quantity });

    },
    async removeItem({ commit }, item) {
      // TODO call the server to remove the item
      commit("removeItem", item);
    }
  },
  modules: {
  }
});
