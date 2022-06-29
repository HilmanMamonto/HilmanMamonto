import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const monthsValue = [
	{ month: 'OCT', value: 350 },
	{ month: 'NOV', value: 110 },
	{ month: 'DEC', value: 650 },
	{ month: 'JAN', value: 450 }
];
const maxBar = Math.max(...monthsValue.map((item) => item.value));

const ChartBar = (props) => {
	return (
		<div className="chart-bar">
			<div className="chart">
				{monthsValue.map((item, i) => {
					const heightBar = item.value / maxBar * 100;
					return (
						<div key={'bar-' + i}>
							<span className="month">{item.month}</span>
							<label style={{ height: heightBar + '%' }} />
							<span className="value">{item.value}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

ChartBar.propTypes = {};

export default ChartBar;
