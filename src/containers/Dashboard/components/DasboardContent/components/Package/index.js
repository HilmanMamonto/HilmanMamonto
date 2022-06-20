import React, { useState } from 'react';
import Header from '../Header';
import './styles.scss';
import Charts from './Charts';
import Availability from './Availability';
import Details from './Details';

const Package = () => {
	const [ isToggleStatistics, setToggleStatistics ] = useState(false);

	return (
		<div id="dashboard-package">
			<Header type="package" />
			<Charts onClickToggle={() => setToggleStatistics(!isToggleStatistics)} toggle={isToggleStatistics} />
			<Availability />
			<Details />
		</div>
	);
};

export default Package;
