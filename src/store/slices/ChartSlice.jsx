import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from "../../api";


const ChartSlice = createSlice({
	name: "chart",
	initialState: {
		isLoading: false,
		data: {},
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getChartData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError=false
			state.data = action.payload;
		});
		builder.addCase(getChartData.pending, (state, action) => {
			state.isLoading = true;
			state.data={}
			state.isError=false
		});
		builder.addCase(getChartData.rejected, (state, action) => {
			state.isError = true;
			state.isLoading= false
		});
	},
});

export default ChartSlice.reducer;
