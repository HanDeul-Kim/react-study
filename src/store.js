import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import user from './store/userSlice.js'
import cart from './store/cartSlice.js'
// 로컬스토리지에 저장하고 싶은 경우
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
const persistConfig = {
    key: "root",
    // cart만 저장
    whitelist: ["cart"],
    storage,
}
const reducer = combineReducers({
    user : user.reducer,
    cart : cart.reducer
})
const persistedReducer = persistReducer(persistConfig, reducer);



export default configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })   
})

// export default configureStore({
//     reducer: {
//         user : user.reducer,
//         cart : cart.reducer
//     }
// })

