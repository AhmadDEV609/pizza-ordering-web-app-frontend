import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    Cart: []
}


const Cartslice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        AddtoCart: (state, action) => {
            const exist = state.Cart.find((element) => element.id == action.payload.id)
            if (exist) {
                exist.quantity += 1;
                state.Cart.length += 1;
            } else {
                state.Cart.push({ ...action.payload, quantity: 1 })
            }

        },
        deletelogic: (state, action) => {
            state.Cart = state.Cart.filter((user) => user.id !== action.payload)
        },
        increamentfuntion: (state, action) => {
            const id = action.payload
            const exist = state.Cart.find((element) => element.id == id)
            if (exist) {
                exist.quantity += 1
                state.Cart.length += 1;
            }

        },
        decreamentfuntion: (state, action) => {
            const id = action.payload
            const exist = state.Cart.find((element) => element.id == id)
            if (exist.quantity > 1) {
                exist.quantity -= 1
                state.Cart.length -= 1;
            } else {
                state.Cart = state.Cart.filter((user) => user.id !== id)
            }
        }
    }
})

export const { AddtoCart, deletelogic, increamentfuntion, decreamentfuntion } = Cartslice.actions
export const cartsliceReducer = Cartslice.reducer