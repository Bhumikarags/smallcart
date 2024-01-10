import { configureStore } from "@reduxjs/toolkit";
import  UserSlice from "./Reducer"
import  Order from "./Reducer2"

const store=configureStore({
    reducer:
    {
        main:UserSlice,
        custom:Order,
    }
})
export default store;
