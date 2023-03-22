import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from "../../api";

const ChartSlice = createSlice({
	name: "chart",
	initialState: {
		coinNo: 1,
		coin1: { isLoading: false, data: [], isError: false },
		coin2: { isLoading: false, data: [], isError: false },
		chartList: ["bitcoin"],
		reload:true,
	},reducers:{
		// Reducer to set the first item in chart list
		setFirstItemChartList(state,action){
			state.reload=true;
			state.chartList[0]=action.payload
		},
		// Reducer to set the second item in chart list
		setSecondItemChartList(state,action){
			state.reload=true
			state.chartList[1]=action.payload
		},
		removeSecondItemChartList(state,action){
			state.reload=false
			state.chartList.splice(1,1);
		},
		interchangeChartItems(state,action){
			state.reload=false;
			state.coin1.data=state.coin2.data
			state.coin2.data=[]
			state.chartList[0]=state.chartList[1]
			state.chartList.splice(1,1)
			state.coinNo=2
		}
		// setFirstAsSecondItem(state,action){
		// 	state.coin1.data=state.coin2.data
		// }
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

export const {
	setFirstItemChartList,
	setSecondItemChartList,
	removeSecondItemChartList,
	interchangeChartItems,
} = ChartSlice.actions;
export default ChartSlice.reducer;
