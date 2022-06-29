import React, { useState } from 'react';

import './styles.scss';

import Availability from './Availability';
import Details from './Details';
import DasboardHead from 'containers/Headers/DasboardHead';
import Statistic from 'containers/Statistic/Statistic';
import Container from 'Layout/Container';

const Package = () => {
	return (
		<div id="dashboard-package">
			<Container bottom="medium">
				<DasboardHead />
			</Container>
			<Statistic />
			<Availability />
			<Details />
		</div>
	);
};

export default Package;
