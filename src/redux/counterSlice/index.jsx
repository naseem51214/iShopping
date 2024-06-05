import { createSlice } from "@reduxjs/toolkit";

export const counterSclice = createSlice({
    name:'counter',
    initialState:10,
    reducers:{
        increaseby1:(a)=>a+1,
        decreaseby1:(state)=>state-1,
        increaseby10:(state)=>state+10,
        decreaseby10:(state)=>state-10,
    }
})
export const {increaseby1,decreaseby1,increaseby10,decreaseby10} = counterSclice.actions
export default  counterSclice.reducer