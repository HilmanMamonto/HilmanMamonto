import React from 'react';
import './styles.scss';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Button from 'components/Button';
import PropTypes from 'prop-types';
import 'animate.css';

const lineLabels = [ 'FEB', 1, 2, 3, 4, 5, 6 ];
const lineStat = [ 0, 10, 5, 2, 20, 30, 10 ];

const monthsValue = [
	{ month: 'OCT', value: 350 },
	{ month: 'NOV', value: 110 },
	{ month: 'DEC', value: 650 },
	{ month: 'JAN', value: 450 }
];
const maxBar = Math.max(...monthsValue.map((item) => item.value));

const dataLine = {
	labels: lineLabels,
	datasets: [
		{
			label: 'Views',
			backgroundColor: '#212121',
			borderColor: '#212121',
			data: lineStat,
			pointRadius: 3,
			pointHoverRadius: 9,

			tension: 0.1
		}
	]
};

const lineOptions = {
	plugins: {
		legend: {
			display: false
		}
	},
	hoverBackgroundColor: 'rgba(239, 54, 54, 0.9)',
	hoverBorderColor: 'rgba(239, 54, 54, 0.08)',
	scales: {
		x: {
			grid: {
				display: false
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
					<div className="details animate__animated animate__fadeInUp animate__slow">
						<div>
							<span>590</span>
							<label>Average</label>
						</div>
						<div>
							<span>2090</span>
							<label>Total</label>
						</div>
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
