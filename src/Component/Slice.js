import { createSlice } from "@reduxjs/toolkit";
export const cartSlice=createSlice({
    name:"task",
    initialState:{
        arr1:[]
       

    },
    reducers:{
        handlearr1:(state,action)=>{
            state.arr1=action.payload
        }

    }
})
export default cartSlice.reducer
export const {handlearr1}=cartSlice.actions
