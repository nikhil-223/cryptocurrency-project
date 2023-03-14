import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from "../../api";


const ChartSlice = createSlice({
	name: "chart",
	initialState: {
		isLoading: false,
		data: null,
		isError: false,
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
