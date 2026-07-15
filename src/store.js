import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './CartSlice';



export default configureStore({
  reducer: {
    cart: cartSliceReducer,
    
  },
});
