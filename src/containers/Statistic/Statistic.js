import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'Layout/Grid';
import Card from 'components/DataDisplay/Card/Card';
import LineChart from 'components/DataDisplay/LineChart/LineChart';

const Statistic = (props) => {
	return (
		<Grid>
			<Card />
			<LineChart />
		</Grid>
	);
};

Statistic.propTypes = {};

export default Statistic;
