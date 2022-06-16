import React from 'react';
import Header from '../Header';
import './styles.scss';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


const lineLabels = [ 'FEB', 1, 2, 3, 4, 5, 6 ];
const barLabels = [ 'OCT', 'NOV' , 'DESC', 'JAN' ];

const barStat =[ 5, 10, 2, 10 ];
const lineStat = [ 0, 10, 5, 2, 20, 30, 10 ];

const dataLine = {
	labels: lineLabels,
	datasets: [
		{
			label: 'Views',
			backgroundColor: '#212121',
			borderColor: '#212121',
			data: lineStat,
			pointRadius: 4,
			pointHoverRadius: 6,
			tension: 0.1
		}
	]
};

const dataBar = {
	labels: barLabels,
	datasets: [
		{
			label: 'Views',
			backgroundColor: '#212121',
			borderColor: '#212121',
			data: barStat,
			pointRadius: 4,
			pointHoverRadius: 6,
			tension: 0.1
		}
	]
};

const lineOptions = {
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

const barOptions = {
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
		},
		y : {
			min:0,
			max:Math.max(...barStat)
		}
	}
	
	
}

const Package = () => {

	return (
		<>
		<Header></Header>
		<div id='charts'>
			<div className='chart-line'>
				<Chart type="line"  options={lineOptions}  data={dataLine} />		
			</div>
			<div className='chart-bar'>
				<Chart type="bar"  options={barOptions}  data={dataBar} />		
			</div>
		</div>

		</>
	);
};

export default Package;
