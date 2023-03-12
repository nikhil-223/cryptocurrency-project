import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCoins = createAsyncThunk("getCoins", async () => {
	const response = await fetch(
		`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	return response.json();
});


export const getChartData = createAsyncThunk("getChartData", async () => {
	const response = await fetch(
		`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	return response.json();
});

