import { createSlice } from "@reduxjs/toolkit";

const PhoneSlice = createSlice({
	name: "phone",
	initialState: {
        chartDisplay:'flex'
    },
	reducers: {
		setChartDisplay(state, action) {
            state.chartDisplay=action.payload
		},
		
	},
});

export default PhoneSlice.reducer;
export const { setChartDisplay } = PhoneSlice.actions;
