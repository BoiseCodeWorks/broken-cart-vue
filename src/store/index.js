import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory: [
      {
        id: "1001",
        name: "T-Shirt",
        colors: [{ name: "White" }, { name: "Blue" }, { name: "Green" }, { name: "Black" }],
        sizes: ["S", "M", "L", "XL"],
        price: 6.79,
        img: "https://www.BROKEDLINK.com/BROKED.png"
      },
      {
        id: "1002",
        name: "Bowling Ball",
        colors: [{ name: "Red" }, { name: "Blue" }, { name: "Purple" }, { name: "Black" }],
        sizes: ["8 lb", "10 lb", "12 lb", "14 lb"],
        price: 27.79,
        img: "http://cliparts.co/cliparts/kiK/B8E/kiKB8E8oT.png"
      },
      {
        id: "1003",
        name: "Pirate Cap With Patch",
        colors: [{ name: "Red" }, { name: "Blue" }, { name: "Pink" }, { name: "Black" }],
        sizes: ["S"],
        price: 1299.99,
        img: "http://www.clipartbest.com/cliparts/aTe/RjM/aTeRjM7T4.png"
      }
    ]
  },
  mutations: {
    // TODO you will need to add and remove items from your cart here
  },
  actions: {
  },
  modules: {
  }
})
