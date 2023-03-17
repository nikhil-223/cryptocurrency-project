import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Alert = () => {
	// const {alert,theme} = useContext(CoinContext)

	const alert = useSelector((state) => {
		return state.alert;
	});
	const theme = useSelector((state) => {
		return state.theme;
	});
	useEffect(() => {
		console.log(alert);
		if (alert.message !== "") {
			setTimeout(() => {
				document
					.getElementsByClassName("alert")[0]
					.classList.add("-translate-x-72");
			}, 4500);
			document
				.getElementsByClassName("alert")[0]
				.classList.remove("-translate-x-72");
		}
	},[alert]);

	return (
		<div
			className={`alert fixed w-60 h-auto p-4 bottom-8 left-4 -translate-x-72 rounded z-20 transition-all bg-alert ${theme==="dark"?'text-textLight':'text-textDark'}`}>
			{alert.message}
		</div>
	);
};

export default Alert;
