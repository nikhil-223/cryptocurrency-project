import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from "../../api";

const ChartSlice = createSlice({
	name: "chart",
	initialState: {
		coinNo: 1,
		coin1: { isLoading: false, data: [], isError: false },
		coin2: { isLoading: false, data: [], isError: false },
		chartList: ["tether", "usd-coin"],
	},
	extraReducers: (builder) => {
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
		builder.addCase(getChartData.pending, (state, action) => {
			if (state.coinNo === 1) {
				state.coin1.isLoading = true;
				state.coin1.isError = false;
			} else if (state.coinNo === 2) {
				state.coin2.isLoading = true;
				state.coin2.isError = false;
			}
		});
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

export default ChartSlice.reducer;
