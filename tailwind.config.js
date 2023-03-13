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
				620: "620px",
				600: "600px",
				750: "750px",
				20: "20px",
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
				dashPc: " 25rem 18rem ",
				dashTab: " minmax(43vh,25rem)  minmax(30vh,20rem) minmax(30vh,20rem) ",
				dashMob: " 43vh 82vh",
				// Complex site-specific row configuration
				layout: "200px minmax(900px, 1fr) 100px",
			},
			gridTemplateColumns: {
				// Simple 8 row grid
				dashPc: "minmax(33vw,33rem)  minmax(33vw,33rem) minmax(28vw ,24rem)",
				dashTab: "55% 45% ",
				dashMob: "100vw",
				// Complex site-specific row configuration
				layout: "200px minmax(900px, 1fr) 100px",
			},
			colors: {
				boxDark: "#07182d",
				boxLight: "#07182d",
				exchBtn:"rgb(43 129 143)",
				dropdownBoxDark: "#14446b",
				dropdownBoxLight: "#14446b",
				dropdownListDark: "#19476e",
				dropdownListLight: "#19476e",
				dropdownListItemDark: "#0c375e",
				dropdownListItemLight: "#0c375e",
				headingColor: "#2e2e2e",
				textColor: "#515151",
				cartNumBg: "#e80013",
				primary: "#f5f3f3",
				cardOverlay: "rgba(256,256,256,0.4)",
				lighttextGray: "#9ca0ab",
				card: "rgba(256,256,256,0.8)",
				cartBg: "#282a2c",
				cartItem: "#2e3033",
				cartTotal: "#343739",
			},
		},
	},
	plugins: [],
};
