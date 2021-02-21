import React from 'react'
import {Line} from 'react-chartjs-2'


const Graph = ({labels, dataSets}) => {
	const defaultRed = 'rgba(255,99,132)'

	const datasets = dataSets.map(s => (
		{
			label: s.title,
			borderColor: s.color ? s.color : defaultRed,
			borderWidth: 2,
			fill: false,
			hoverBackgroundColor: s.color ? s.color : defaultRed,
			data: s.data
		}
	))

	const data = {
		labels: labels,
		datasets: datasets
	}

	const options = {
		responsive: true,
		elements: {
			point: {
				radius: 0
			}
		},
		tooltips: {
			enabled: true,
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'index',
			intersect: false
		},
		scales: {
		}
	}


	return(
		<Line
			options={options}
			data={data}
		/>
	)

}

export default Graph