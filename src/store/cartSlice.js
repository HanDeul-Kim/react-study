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
        removeCount(state, action) {
            let findProduct = state.findIndex((a) => { return a.id === action.payload })
            state[findProduct].count > 1 ? state[findProduct].count-- : state.splice(findProduct, 1)
        },
        addProduct(state, action) {
            let returnValue = state.find((data) => { return data.id === action.payload.id });
            let index = state.findIndex( x => x.id === action.payload.id);
            if (!state.includes(returnValue)) {
                state.push(action.payload)
            } 
            state.sort( (a, b) => {return a.id < b.id ? -1 : a.id > b.id ? 1 : 0});
        },
        
    }
})
export let { addCount, addProduct, removeCount } = cart.actions
export default cart