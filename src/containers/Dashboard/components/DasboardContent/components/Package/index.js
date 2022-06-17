import React, { useState } from 'react';
import Header from '../Header';
import './styles.scss';
import Charts from './Charts';

const Package = () => {
	const [ isToggleStatistics, setToggleStatistics ] = useState(false);

	return (
		<div id="dashboard-package">
			<Header />
			<Charts onClickToggle={() => setToggleStatistics(!isToggleStatistics)} toggle={isToggleStatistics} />
		</div>
	);
};

export default Package;
