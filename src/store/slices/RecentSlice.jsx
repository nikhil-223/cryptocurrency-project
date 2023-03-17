import { createSlice } from "@reduxjs/toolkit";

const RecentSlice = createSlice({
	name: "recent",
	initialState: [],
	reducers: {
		addRecentCoin(state,action){
         state.unshift(action.payload)
        }
	},
});

export default RecentSlice.reducer;
export const {addRecentCoin}=RecentSlice.actions
