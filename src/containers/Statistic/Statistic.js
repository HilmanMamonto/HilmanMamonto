import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'Layout/Grid';
import Card from 'components/DataDisplay/Card/Card';

import ChartBar from 'components/DataDisplay/Charts/ChartBar/ChartBar';
import Container from 'Layout/Container';
import ButtonToggle from 'components/ButtonToggle/ButtonToggle';
import H from 'components/H';
import ChartLine from 'components/DataDisplay/Charts/ChartLine/ChartLine';

const Statistic = (props) => {
	return (
		<Container bottom="medium">
			<Container flex justifyContent="space-betwen" alignItems="center" bottom="small">
				<H as="h2" weight="bold" childrend={'Earn Statistic'} />
				<ButtonToggle size="small" leftLabel="Earn" rightLabel="Views" />
			</Container>
			<Grid templateColumns={[ 'auto', 'auto', '1fr' ]} colGap={20}>
				<Card />
				<ChartLine />
				<ChartBar />
			</Grid>
		</Container>
	);
};

Statistic.propTypes = {};

export default Statistic;
