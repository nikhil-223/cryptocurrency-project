import { createSlice } from "@reduxjs/toolkit";

const RecentSlice = createSlice({
	name: "recent",
	initialState: [],
	reducers: {
		addRecentCoin(state,action){
         state.unshift(action.payload)
        },
		removeRecentCoin(state,action){

        return state.filter((item)=>{
			return item.name!==action.payload.name
		 })
        }
	},
});

export default RecentSlice.reducer;
export const {addRecentCoin,removeRecentCoin}=RecentSlice.actions
