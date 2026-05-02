import { configureStore } from "@reduxjs/toolkit";
import { Userlar } from "../redux/userApp";

export const store = configureStore({
    reducer:{
        users: Userlar
    }
})