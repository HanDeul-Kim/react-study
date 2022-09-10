import { createSlice } from '@reduxjs/toolkit'
let cart = createSlice({
    name: 'cart',
    initialState: 
        [],
    reducers : {
        addCount(state, action) {
            let findProduct = state.findIndex( (a) => { return a.id === action.payload })
            state[findProduct].count++
        },
        addProduct(state, action) {
            state.push(action.payload)

            state.filter((item, idx, self) => {
                if(state.includes(item)) {
                    // state.pop(0)
                } else{
                    state.push(action.payload)
                }
            })
            
        }
    }
})
export let {addCount, addProduct} = cart.actions
export default cart