import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneMenuPath } from "../../store/slices/DropSlice";
import { setChartDisplay } from "../../store/slices/PhoneSlice";

const PhoneMenuItem = (props) => {
	const { name, icon } = props;
	const theme = useSelector((state) => {
		return state.theme;
	});
	const phoneMenuPath = useSelector((state) => {
		return state.drop.phoneMenu.path;
	});
	const dispatch = useDispatch();

	const item_show = (e) => {
		dispatch(setPhoneMenuPath(name));

		if (name === "Markets") {
			document.querySelector("#exchange-coins").style.zIndex = "-10";
			document.querySelector("#portfolio").style.zIndex = "-10";
			document
				.querySelector(".coinDetails")
				.classList.replace("sm:hidden", "sm:flex");
			document
				.querySelector(".LineChart")
				.classList.replace("sm:flex", "sm:hidden");
			dispatch(setChartDisplay('hidden'))
		} else if (name === "Home") {
			document.querySelector("#exchange-coins").style.zIndex = "-10";
			document.querySelector("#portfolio").style.zIndex = "-10";
			document
			.querySelector(".coinDetails")
			.classList.replace("sm:flex", "sm:hidden");
			document
			.querySelector(".LineChart")
			.classList.replace("sm:hidden", "sm:flex");
			dispatch(setChartDisplay('flex'))
		} else if (name === "Exchange") {
			document.querySelector("#exchange-coins").style.zIndex = "90";
			document.querySelector("#portfolio").style.zIndex = "-10";
		} else {
			document.querySelector("#exchange-coins").style.zIndex = "-10";
			document.querySelector("#portfolio").style.zIndex = "90";
		}
	};
	return (
		<div
			className={`phoneMenu__item flex flex-col items-center justify-center ${
				name === phoneMenuPath
					? theme === "dark"
						? "text-textActivePhoneMenuLight"
						: "text-textActivePhoneMenuDark"
					: theme === "dark"
					? " text-textLight"
					: " text-textDark"
			}`}
			onClick={item_show}>
			<div className="text-xl phoneMenu__item__icon-home">{icon}</div>
			<span className=" text-phoneSpan">{name}</span>
		</div>
	);
};

export default PhoneMenuItem;
