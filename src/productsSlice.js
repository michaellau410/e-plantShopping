import { createSlice } from "@reduxjs/toolkit";


export const HARDCODED_CATALOGUE = [
  { id: 'cat-1', name: 'May'},
  { id: 'cat-2', name: 'June'},
  { id: 'cat-3', name: 'July'},
];


export const productsSlice = createSlice({
    name: "products",
    initialState: [
        {
            img: "forget_me_not.png",
            name: "Forget Me Not",
            price: 20,
            quantity: 0,
            desc: "Tiny, delicate blue blossoms symbolizing enduring love, true loyalty, and everlasting memories between devoted hearts.",
            cat: "May"
        },
        {
            img: "anniversary_rose.png",
            name: "Anniversary Rose",
            price: 17,
            quantity: 0,
            desc: "A classic, elegant bloom celebrating milestone love, timeless devotion, and deep, romantic commitment through the years.",
            cat: "May"
        },

        {
            img: "iris.png",
            name: "Iris",
            price: 15,
            quantity: 0,
            desc: "A striking, regal bloom symbolizing profound wisdom, deep hope, trust, and cherished messages of love.",
            cat: "June"
          },
          {
            img: "bellflower.png",
            name: "Bellflower",
            price: 30,
            quantity: 0,
            desc: "Charming, bell-shaped petals representing unwavering gratitude, lifelong constancy, humility, and gentle affection between close friends.",
            cat: "June"
          },

          {
            img: "orchid_cactus.png",
            name: "Orchid Cactus",
            price: 35,
            quantity: 0,
            desc: "Exotic, dramatic night-blooming petals representing hidden beauty, rare passion, and resilient, unexpected inner strength.",
            cat: "July"
          },
          {
            img: "brid_of_paradise.png",
            name: "Bird of Paradise",
            price: 55,
            quantity: 0,
            desc: "A bold, tropical masterpiece symbolizing magnificent freedom, joyful optimism, ultimate success, and a sense of high adventure.",
            cat: "July"
          },


    ],

    reducers: {
        incrementQuantity: (state, action) => {
            const item = state.find(product=>product.name === action.payload);
            if (item) {
                //console.log(item.name);
                item.quantity++;
            }

            //state.forEach((e)=>console.log(e.quantity));

        },
        decrementQuantity: (state, action) => {
            const item = state[action.payload];
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
    },
});

export const { incrementQuantity, decrementQuantity } = productsSlice.actions;
export default productsSlice.reducer;
