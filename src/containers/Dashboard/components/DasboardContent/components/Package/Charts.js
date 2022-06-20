import React from 'react';
import './styles.scss';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Button from 'components/Button';
import PropTypes from 'prop-types';
import 'animate.css';

const lineLabels = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30
];
const lineStat = [
	8,
	10,
	10,
	12,
	11,
	15,
	15,
	12,
	14,
	10,
	11,
	12,
	12,
	10,
	10,
	11,
	12,
	11,
	11,
	14,
	13,
	13,
	10,
	10,
	10,
	11,
	12,
	14,
	13,
	13
];

const monthsValue = [
	{ month: 'OCT', value: 350 },
	{ month: 'NOV', value: 110 },
	{ month: 'DEC', value: 650 },
	{ month: 'JAN', value: 450 }
];
const maxBar = Math.max(...monthsValue.map((item) => item.value));

let width, height, gradient;
function getGradient(ctx, chartArea) {
	const chartWidth = chartArea.right - chartArea.left;
	const chartHeight = chartArea.bottom - chartArea.top;
	if (!gradient || width !== chartWidth || height !== chartHeight) {
		// Create the gradient because this is either the first render
		// or the size of the chart has changed
		width = chartWidth;
		height = chartHeight;
		gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
		gradient.addColorStop(0, 'rgba(239, 54, 54, 0.08');
		gradient.addColorStop(1, 'rgba(239, 54, 54, 1');
	}

	return gradient;
}

const dataLine = {
	labels: lineLabels,
	datasets: [
		{
			label: 'Views',
			borderColor: (context) => {
				const chart = context.chart;
				const { ctx, chartArea } = chart;

				if (!chartArea) {
					// This case happens on initial chart load
					return;
				}
				return getGradient(ctx, chartArea);
			},
			backgroundColor: 'rgba(239, 54, 54, 0.02',
			fill: 'origin',
			data: lineStat,
			pointRadius: 0,
			borderWidth: 1.8,
			pointHoverRadius: 9,
			tension: 0.1
		}
	]
};

const lineOptions = {
	plugins: {
		legend: {
			display: false
		},
		tooltip: {
			backgroundColor: 'rgba(33, 33, 33, 0.8)'
		}
	},
	hoverBackgroundColor: 'rgba(239, 54, 54, 0.9)',
	hoverBorderColor: 'rgba(239, 54, 54, 0.08)',
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false,
				tickLength: 12
			}
		},
		y: {
			grid: {
				drawBorder: false,
				color: '#fafafa'
			}
		}
	}
};

const Charts = (props) => {
	return (
		<div>
			<div className="toggle-views-earn">
				<div className="tittle">{props.toggle ? 'Views' : 'Earn'} Statistics</div>
				<div className="toggle">
					<Button
						type="button"
						children={'Views'}
						className={props.toggle ? 'active' : ''}
						onClick={props.onClickToggle}
					/>
					<Button
						type="button"
						children={'Earn'}
						className={!props.toggle ? 'active' : ''}
						onClick={props.onClickToggle}
					/>
				</div>
			</div>
			<div className="charts">
				<div className="chart-line">
					<div className="head">
						<span className="tittle">Daily Views</span>
						<Button type="button" className="btn" children={'FEB 2022'} />
					</div>
					<Chart type="line" options={lineOptions} data={dataLine} />
				</div>
				<div className="chart-bar">
					<div className="chart">
						{monthsValue ? (
							monthsValue.map((item, i) => {
								const heightBar = item.value / maxBar * 100;
								return (
									<div key={'bar-' + i}>
										<span className="month">{item.month}</span>
										<label style={{ height: heightBar + '%' }} />
										<span className="value">{item.value}</span>
									</div>
								);
							})
						) : null}
					</div>
				</div>
				<div className="details">
					<div className="animate__animated animate__fadeInUp animate__slow">
						<span>1,200</span>
						<label>Average</label>
					</div>
					<div className="animate__animated animate__fadeInUp animate__slow">
						<span>4,580</span>
						<label>Total</label>
					</div>
				</div>
			</div>
		</div>
	);
};

Charts.propTypes = {
	onClickToggle: PropTypes.func,
	toggle: PropTypes.bool
};

export default Charts;
