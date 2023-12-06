import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import logstatus from "./logstatus";

const store = configureStore({
    reducer : {
        cart : cartSlice,
        loginStatus: logstatus,
    }
});

export default store; 