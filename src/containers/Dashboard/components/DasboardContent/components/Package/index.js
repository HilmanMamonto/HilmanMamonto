import React from 'react';
import Header from '../Header';
import './styles.scss';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const labels = [ 'FEB', 1, 2, 3, 4, 5, 6 ];

const data = {
	labels: labels,
	datasets: [
		{
			label: 'Views',
			backgroundColor: '#212121',
			borderColor: '#212121',
			data: [ 0, 10, 5, 2, 20, 30, 10 ],
			pointRadius: 4,
			pointHoverRadius: 6
		}
	]
};

const options = {
	plugins : {
		legend: {
			display: false
		  }
	},
	hoverBackgroundColor: '#ef3636',
	hoverBorderColor: 'rgba(239, 54, 54, 0.08) ',
	scales : {
		x: {
			grid: {
				display: false
			}
		}
	}
	
	
}

const Package = () => {

	return (
		<>
		<Header></Header>
		<div id='chart'>
			<Chart type="line"  options={options}  data={data} />		
		</div>
		</>
	);
};

export default Package;
