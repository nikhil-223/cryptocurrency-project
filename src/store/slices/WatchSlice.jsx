import { createSlice } from "@reduxjs/toolkit";

const WatchSlice = createSlice({
	name: "watch",
	initialState: {
		list: [],
	},
	reducers: {
		addWatchItem(state, action) {
			state.list.unshift(action.payload);
		},
		removeWatchItem(state, action) {
			 state.list= state.list.filter((item) => {
					return item !== action.payload;
				});
		},
		setWatchList(state,action){
			state.list=action.payload
		}
	},
});

export const { addWatchItem,removeWatchItem,setWatchList } = WatchSlice.actions;
export default WatchSlice.reducer;
