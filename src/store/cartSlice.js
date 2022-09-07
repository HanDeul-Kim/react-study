import { createSlice } from '@reduxjs/toolkit'
let cart = createSlice({
    name: 'cart',
    initialState: 
        [
            {id : 0, name : 'White and Black', count : 2},
            {id : 2, name : 'Grey Yordan', count : 1}
        ],
    reducers : {
        addCount(state, action) {
            let findProduct = state.findIndex( (a) => { return a.id === action.payload })
            state[findProduct].count++
        },
        addProduct(state, action) {
            state.push(action.payload)
        }
    }
})
export let {addCount, addProduct} = cart.actions
export default cart