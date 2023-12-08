import { createSlice } from "@reduxjs/toolkit";

const logStatus = createSlice({
    name : 'log',
    initialState : {
        items : 'Login'
    },
    reducers : {
        logging:(state,action)=>{
            state.items = action.payload;
        },
    }
})

export const { logging } = logStatus.actions;

export default logStatus.reducer; 