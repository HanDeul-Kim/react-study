import { createSlice } from '@reduxjs/toolkit'
let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 29},
    reducers : {
        change(state) {
            return { name : 'lee', age : 27}
        }
    }
})
export let {change} = user.actions
export default user;