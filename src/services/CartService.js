class CartService {
  async addItemToCart(item) {
    /**
      * FIXME - Add the item to the cart or increase the quantity
      * Our cart demands that items being added to it must have the following properties
      * you may want to use a model
      * let newItem = {
      *   itemId:     "",
      *   name:       "",
      *   color:      "",
      *   size:       "",
      *   price:      10,
      *   quantity:    1,
      * }
      * log the item being passed in from the view
      * to figure out which properties from the item need to be
      * re-maped to the newItem object.
      * After building the newItem, add it to the cart.
      * If the item already exists in the cart only increase the quantity of the existing item
      * DO NOT push the same item twice
    */
  }

  async removeItem(item) {
    /**
     * FIXME - Remove the passed in item from the cart
     */
  }
}

export const cartService = new CartService()
