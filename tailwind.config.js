/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			width: {
				150: "150px",
				190: "190px",
				225: "225px",
				275: "275px",
				300: "300px",
				340: "340px",
				350: "350px",
				375: "375px",
				460: "460px",
				656: "656px",
				880: "880px",
				508: "508px",
			},
			height: {
				xs: "2.8rem",
				80: "80px",
				150: "150px",
				225: "225px",
				300: "300px",
				350: "350px",
				370: "370px",
				420: "420px",
				510: "510px",
				550: "550px",
				600: "600px",
				650: "650px",
				685: "685px",
				800: "800px",
				"5/12": "41.6666667",
				"90vh": "90vh",
				1500: "1200px",
				"93vh": "93vh",
			},
			minWidth: {
				210: "210px",
				350: "350px",
				300: "300px",
				620: "620px",
				600: "600px",
				750: "750px",
				20: "20px",
				ex: "130px",
			},
			screens: {
				sm: "200px",
				md: "750px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			gridTemplateRows: {
				// Simple 8 row grid
				10: "repeat(10, minmax(0, 1fr))",
				dashPc: " 55vh 40vh ",
				dashTab: " minmax(43vh,25rem)  minmax(30vh,20rem) minmax(30vh,20rem) ",
				dashMob: " 43vh 57vh",
				// Complex site-specific row configuration
				layout: "200px minmax(900px, 1fr) 100px",
			},
			gridTemplateColumns: {
				// Simple 8 row grid
				dashPc: "minmax(28vw,33rem)  minmax(33vw,33rem) minmax(28vw ,24rem)",
				dashTab: "55% 45% ",
				dashMob: "100vw",
				// Complex site-specific row configuration
				layout: "200px minmax(900px, 1fr) 100px",
			},
			colors: {
				boxDark: "#07182d",
				boxLight: "#fafafa",
				textLight: "#f8e5e4",
				textDark: "#0b3e43",
				coinsBorder: "rgb(83 107 147 / 50%)",
				exchBtnDark: "rgb(43 129 143)",
				exchBtnLight: "rgb(228 34 99 / 30%)",
				dropdownBoxDark: "#14446b",
				dropdownBoxLight: "rgb(123 181 196 / 70%)",
				// timeperiod
				timePeriodDark: "#174d79",
				timePeriodLight: "rgb(123 181 196 / 70%)",
				activeTimePeriodDark: "rgba(205, 88, 136,1)",
				activeTimePeriodLight: "rgba(205, 88, 136,0.5)",
				// dropdown list
				dropdownListDark: "#19476e",
				dropdownListLight: "#9dd5d53b",
				dropdownListItemDark: "#0c375e",
				dropdownListItemLight: "rgb(128 222 220)",
				// phone menu
				phoneMenuDark: "#081c35",
				phoneMenuLight: "#fff",
				textActivePhoneMenuDark: "rgb(8, 149, 149)",
				textActivePhoneMenuLight: "rgb(87, 168, 235)",
			},
			boxShadow: {
				phoneMenu: "-0.1rem 0 0.8rem 0 rgba(0,0,0,.3)",
			},
			fontSize: {
				phoneSpan: "0.6rem",
			},
		},
	},
	plugins: [],
};
