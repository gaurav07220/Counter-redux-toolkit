import { configureStore } from "@reduxjs/toolkit";
import ConunterSlice from "./ConunterSlice";


const store = configureStore({
    reducer:{
        val:ConunterSlice
    }
})

export default store;