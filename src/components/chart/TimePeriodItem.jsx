import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRange, setTimePeriod } from '../../store/slices/DropSlice';

const TimePeriodItem = (props) => {
    const {timePeriod}=props;
		const theme = useSelector((state) => {
			return state.theme;
		});
		const range = useSelector((state) => {
			return state.drop.timePeriod.range;
		});

    const dispatch=useDispatch()
    const handleClick=(e)=>{
      let time
      switch (timePeriod) {
        case '1D':
          time=1
          break;
        case '1W':
          time=7
          break;
        case '1M':
          time=31
          break;
        case '6M':
          time=182
          break;
        case '1Y':
          time=365
          break;
        default:
          time=1
          break;
      }
      dispatch(setTimePeriod(time))
      dispatch(setRange(timePeriod))
			let time_period_elements = Array.from(
				document.getElementsByClassName("timePeriodItem")
			);
			time_period_elements.map((item) => {
				item.style.background =
					theme === "dark" ? "#174d79" : "rgb(123 181 196 / 70%)";
				return 0;
			});
			e.target.style.backgroundColor =
				theme === "dark" ? "rgba(205, 88, 136,1)" : "rgba(205, 88, 136, 0.5)";
    }
  return (
		<div
			className={`timePeriodItem flex justify-center items-center rounded w-11 h-9 ${
				theme === "dark" ? " bg-timePeriodDark" : " bg-timePeriodLight"
			} cursor-pointer`}
			onClick={handleClick}
			style={
				timePeriod === range
					? {
							backgroundColor:
								theme === "dark"
									? "rgba(205, 88, 136,1)"
									: "rgba(205, 88, 136, 0.5)",
					  }
					: {}
			}>
			{timePeriod}
		</div>
	);
}

export default TimePeriodItem