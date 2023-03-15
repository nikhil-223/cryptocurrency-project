import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from "../../api";


const ChartSlice = createSlice({
	name: "chart",
	initialState: {
		currentCoin: "bitcoin",
		cryptoDropName:"Bitcoin",
		timePeriod:1,
		isLoading: false,
		data: null,
		isError: false,
	},
	reducers: {
		setCurrentCoin(state, action) {
			state.currentCoin = action.payload.toLowerCase();
		},
		setCryptoDropName(state, action) {
			state.cryptoDropName = action.payload
				.charAt(0).toUpperCase()
				.concat(action.payload.slice(1)); action.payload.toLowerCase();
		},
		setTimePeriod(state,action){
			state.timePeriod= action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getChartData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(getChartData.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getChartData.rejected, (state, action) => {
			state.isError = true;
		});
	},
});

export default ChartSlice.reducer;
export const { setCurrentCoin } = ChartSlice.actions;
export const { setCryptoDropName } = ChartSlice.actions;
export const { setTimePeriod } = ChartSlice.actions;
