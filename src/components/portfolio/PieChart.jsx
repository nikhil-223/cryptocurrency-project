import React from 'react'
import {useSelector} from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {

  const PieItem=useSelector((state)=>{
    return state.pieItem
  })
  const coins=useSelector((state)=>{
    return state.coins.data;
  })

  const arr=PieItem.map((item)=>{
     let found= coins.find(function (element) {
          return element.name === item;
      });
    return found
  })
  

  


  const labels= arr.map((item)=>{
    return item.name
  })
  const Values= arr.map((item)=>{
    return item.current_price

  })

  const data = {
		labels: labels,
		datasets: [
			{
				label: "",
				data: Values,
				backgroundColor: [
					"rgba(255, 99, 132, 0.7)",
					"rgba(54, 162, 235, 0.7)",
					"rgba(255, 206, 86, 0.7)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
				],
				borderWidth: 0,
        borderColor:'pink',
				hoverBorderWidth: 0.5,
			},
		],
	};
  const options={
    maintainAspectRatio: false,
    plugins:{
  legend:{
    display: true,
    position: "right",
    borderWidth:2,
  }
    }
  }
  return (
    <Doughnut
  options={options}
  data={data}
  
/>
  )
}

export default PieChart


