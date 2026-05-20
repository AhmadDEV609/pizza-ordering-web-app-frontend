import { configureStore } from '@reduxjs/toolkit';
import { cartsliceReducer } from './Slice/CartSlice';
export const store = configureStore({
    reducer: {
        Cart: cartsliceReducer
    }
})