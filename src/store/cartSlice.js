import { createSlice } from '@reduxjs/toolkit'
let cart = createSlice({
    name: 'cart',
    initialState:
        [],
    reducers: {
        addCount(state, action) {
            let findProduct = state.findIndex((a) => { return a.id === action.payload })
            state[findProduct].count++
        },
        addProduct(state, action) {
            // state.push(action.payload)


            let returnValue = state.find((data, idx) => { return data.id === idx });
            if (!state.includes(returnValue)) {
                state.push(action.payload)
            } 
            console.log(returnValue)

        }
    }
})
export let { addCount, addProduct } = cart.actions
export default cart