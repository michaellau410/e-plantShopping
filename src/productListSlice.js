import { createSlice } from "@reduxjs/toolkit";


export const HARDCODED_CATALOGUE = [
  { id: 'cat-1', name: 'May'},
  { id: 'cat-2', name: 'June'},
  { id: 'cat-3', name: 'July'},
];


export const productListSlice = createSlice({
    name: "productList",
    initialState: [
        {
            img: "./assets/forget_me_not.png",
            name: "Forget Me Not",
            price: 20,
            quantity: 0,
            desc: "Tiny, delicate blue blossoms symbolizing enduring love, true loyalty, and everlasting memories between devoted hearts.",
            month: "May"
        },
        {
            img: "./assets/anniversary_rose.png",
            name: "Anniversary Rose",
            price: 17,
            quantity: 0,
            desc: "A classic, elegant bloom celebrating milestone love, timeless devotion, and deep, romantic commitment through the years.",
            month: "May"
        },

        {
            img: "./assets/iris.png",
            name: "Iris",
            price: 15,
            quantity: 0,
            desc: "A striking, regal bloom symbolizing profound wisdom, deep hope, trust, and cherished messages of love.",
            month: "June"
          },
          {
            img: "./assets/bellflower.png",
            name: "Bellflower",
            price: 30,
            quantity: 0,
            desc: "Charming, bell-shaped petals representing unwavering gratitude, lifelong constancy, humility, and gentle affection between close friends.",
            month: "June"
          },

          {
            img: "./assets/orchid_cactus.png",
            name: "Orchid Cactus",
            cost: 35,
            quantity: 0,
            desc: "Exotic, dramatic night-blooming petals representing hidden beauty, rare passion, and resilient, unexpected inner strength.",
            month: "July"
          },
          {
            img: "./assets/bird_of_paradise.png",
            name: "Bird of Paradise",
            cost: 55,
            quantity: 0,
            desc: "A bold, tropical masterpiece symbolizing magnificent freedom, joyful optimism, ultimate success, and a sense of high adventure.",
            month: "July"
          },


    ],

    reducers: {
        incrementQuantity: (state, action) => {
            const item = state[action.payload];
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state[action.payload];
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
    },
});

export const { incrementQuantity, decrementQuantity } = productListSlice.actions;
export default productListSlice.reducer;
