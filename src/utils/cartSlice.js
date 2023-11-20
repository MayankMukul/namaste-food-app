import {createSlice} from 'react-redux';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload);
        },
        removeItem:(state)=>{
            state.item.pop();
        },
        clearItem:(state)=>{
            state.item = [];
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;