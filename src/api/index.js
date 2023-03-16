// Import the createAsyncThunk function from the Redux Toolkit library
import { createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk to fetch data for a list of coins based on the specified currency
export const getCoins = createAsyncThunk("getCoins", async (currency) => {
	// Make a fetch request to the Coingecko API with the specified currency and other parameters
	const response = await fetch(
		`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	// Convert the response to a JSON object and return it
	console.log('coin');
	return response.json();
});

// Define another async thunk to fetch data for a single coin's market chart
export const getChartData = createAsyncThunk(
	"getChartData",
	async ({currentCoin,timePeriod,currency}) => {
		// Make a fetch request to the Coingecko API with the specified parameters
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/${currentCoin}/market_chart?vs_currency=${currency}&days=${timePeriod}&interval=hourly`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		// Convert the response to a JSON object and return it
		console.log('chart');
		return response.json();
	}
);
