import { createSlice } from "@reduxjs/toolkit";

const logStatus = createSlice({
    name : 'log',
    initialState : {
        items : 'login'
    },
    reducers : {
        logging:(state,action)=>{
            state.items = action.payload;
        },
    }
})

export const { logging } = logStatus.actions;

export default logStatus.reducer; 