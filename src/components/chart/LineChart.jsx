import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	LineController,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Title,
	Tooltip,
	Legend,
	LineController
);

const LineChart = () => {
	const chart = useSelector((state) => {
		return state.chart;
	});
	const coins = useSelector((state) => {
		return state.coins.data;
	});

	const chartRange = useSelector((state) => {
		return state.drop.timePeriod.range;
	});
	const chartList = useSelector((state) => {
		return state.chart.chartList;
	});

	let theme = "dark";
	// lables

	let labels = [];

	if (chart.coin1.data !== undefined)
		for (const element of chart.coin1.data) {
			const timestamp = new Date(element[0]);
			const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
			const yearMonth = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			];

			let day = weekday[timestamp.getDay()];
			let month = yearMonth[timestamp.getMonth()];
			// dummy
			switch (chartRange) {
				case "1D":
					labels.push(`${timestamp.getHours()}:${timestamp.getMinutes()}`);
					break;
				case "1W":
					labels.push(
						`${day} ${timestamp.getHours()}:${timestamp.getMinutes()}`
					);
					break;
				case "1M":
					labels.push(`${month} ${timestamp.getDate()}`);
					break;
				case "6M":
					labels.push(`${month} ${timestamp.getMonth()}`);
					break;
				case "1Y":
					labels.push(`${month} ${timestamp.getMonth()}`);
					break;
				default:
					labels.push(`${timestamp.getHours()}:${timestamp.getMinutes()}`);
					break;
			}
			// eslint-disable-next-line
		}
	let datasets = [];
	let cryptoname = [];
	coins.map((coin) => {
		if (coin.id === chartList[0]) cryptoname[0]=coin;
		return 0;
	});
	coins.map((coin) => {
		if (coin.id === chartList[1]) {
			cryptoname[1]=coin;
		}
		return 0;
	});
	
	if (chart.coin2.data !== undefined && chart.coin1.data!== undefined)
		for (const chartitemindex in chartList) {
			let dataArray = [];
			let coindata=[chart.coin1.data,chart.coin2.data];
			let color = ["#CD5888", "#579BB1"];
			
			for (const element of coindata[chartitemindex]) {
				dataArray.push(element[1]);
			}
			
			datasets.push({
				label: cryptoname[chartitemindex].name,
				data: dataArray,
				borderColor:color[chartitemindex],
				borderWidth: 1.5,
				backgroundColor:
					theme === "dark" ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.03)",
				tension: 0.1,
				pointRadius: 0,
				fill: true,
				interaction: {
					intersect: false,
				},
				radius: 0,
				spanGaps: true,
			});
		}

	const data = {
		labels,
		datasets,
	};

	const x = window.matchMedia("(max-width: 600px)");

	let yticks;
	let xticks;

	if (x.matches) {
		// If media query matches
		yticks = { display: false, beginAtZero: true };
		xticks = { display: false, beginAtZero: true };
	} else {
		yticks = {};
		xticks = {};
	}
	const options = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: true,
		},
		scales: {
			// to remove the labels
			x: {
				ticks: xticks,

				// to remove the x-axis grid
				grid: {
					drawBorder: false,
					display: false,
				},
			},
			// to remove the y-axis labels
			y: {
				ticks: yticks,
				// to remove the y-axis grid
				grid: {
					drawBorder: false,
					display: false,
				},
			},
		},
	};

	// Call listener function at run time
	// Attach listener function on state changes

	return <Line data={data} options={options} />;
};

export default LineChart;
