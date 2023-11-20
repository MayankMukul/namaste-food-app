import confifureStore from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = confifureStore({
    reducer : {
        cart : cartSlice,
    }
});

export default store; 