import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from "../../api";

const ChartSlice = createSlice({
	name: "chart",
	initialState: {
		coinNo: 1, // Represents the coin number for which data is currently being fetched
		coin1: { isLoading: false, data: [], isError: false }, // Represents the first coin data object
		coin2: { isLoading: false, data: [], isError: false }, // Represents the second coin data object
		chartList: ["tether", "usd-coin"], // Array of two coins for which data is to be fetched
	},reducers:{
		// Reducer to set the first item in chart list
		setFirstItemChartList(state,action){
			state.chartList[0]=action.payload
		},
		// Reducer to set the second item in chart list
		setSecondItemChartList(state,action){
			state.chartList[1]=action.payload
		}
	},
	extraReducers: (builder) => {
		// Case to handle successful data fetch
		builder.addCase(getChartData.fulfilled, (state, action) => {
			if (state.coinNo === 1) {
				state.coin1.isLoading = false;
				state.coin1.isError = false;
				state.coin1.data = action.payload.prices;
				state.coinNo = 2;
			} else if (state.coinNo === 2) {
				state.coin2.isLoading = false;
				state.coin2.isError = false;
				state.coin2.data = action.payload.prices;
				state.coinNo = 1;
			}
		});
		// Case to handle data fetch in progress
		builder.addCase(getChartData.pending, (state, action) => {
			if (state.coinNo === 1) {
				state.coin1.isLoading = true;
				state.coin1.isError = false;
			} else if (state.coinNo === 2) {
				state.coin2.isLoading = true;
				state.coin2.isError = false;
			}
		});
		// Case to handle data fetch failure
		builder.addCase(getChartData.rejected, (state, action) => {
			if (state.coinNo === 1) {
				state.coin1.isLoading = false;
				state.coin1.isError=true
				state.coinNo=2
			} else if (state.coinNo === 2) {
				state.coin2.isLoading = false;
				state.coin2.isError=true
				state.coinNo=1
			}
		});
	},
});

export const {setFirstItemChartList,setSecondItemChartList}=ChartSlice.actions
export default ChartSlice.reducer;
