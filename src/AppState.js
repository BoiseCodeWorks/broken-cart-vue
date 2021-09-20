import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  inventory: [
    {
      id: '1001',
      name: 'T-Shirt',
      colors: [{ name: 'White' }, { name: 'Blue' }, { name: 'Green' }, { name: 'Black' }],
      sizes: ['S', 'M', 'L', 'XL'],
      price: 6.79,
      img: 'https://ctl.s6img.com/society6/img/xhjN3YUeSdks6HME6tx-MUY9Cpo/w_1500/long-sleeve-tshirts/men/greybg/black/~artwork,bg_FFFFFFFF,fw_3297,fh_5102,fx_292,fy_417,iw_2835,ih_3402/s6-original-art-uploads/society6/uploads/misc/f485476ed249425ba18061de48de205d/~~/my-code-works-i-have-no-idea-why-long-sleeve-tshirts.jpg',
      stock: 5
    },
    {
      id: '1002',
      name: 'Bowling Ball',
      colors: [{ name: 'Red' }, { name: 'Blue' }, { name: 'Purple' }, { name: 'Black' }],
      sizes: ['8 lb', '10 lb', '12 lb', '14 lb'],
      price: 27.79,
      img: 'http://cliparts.co/cliparts/kiK/B8E/kiKB8E8oT.png',
      stock: 100
    },
    {
      id: '1003',
      name: 'Pirate Cap With Patch',
      colors: [{ name: 'Red' }, { name: 'Blue' }, { name: 'Pink' }, { name: 'Black' }],
      sizes: ['S'],
      price: 1299.99,
      img: 'http://www.clipartbest.com/cliparts/aTe/RjM/aTeRjM7T4.png',
      stock: 0
    }
  ],
  cart: {
    items: [
      {
        itemId: '123',
        name: 'A BɼokƏn ITEM',
        color: 'red',
        size: 'L',
        price: 10,
        quantity: -50
      },
      {
        itemId: '1223',
        name: 'Another BɼokƏn ITEM',
        color: 'YOU SHOULD REALLY FIX THOSE BAD NUMBERS',
        size: 'L',
        price: 16.74,
        quantity: 5
      }
    ]
  }
})
