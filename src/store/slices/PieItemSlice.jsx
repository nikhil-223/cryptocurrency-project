import { createSlice } from "@reduxjs/toolkit";

const PieItemSlice=createSlice({
    name:"PieItem",
    initialState:['Bitcoin','Ethereum','Lido Staked Ether'],
    reducers:{
    addPieItem(state,action){
        state.pop()
        state.unshift(action.payload)
         return state
    }
    }
})
export default PieItemSlice.reducer
export const {addPieItem}=PieItemSlice.actions
