import React, { useState } from 'react';

import './styles.scss';
import Charts from './Charts';
import Availability from './Availability';
import Details from './Details';
import DasboardHead from 'containers/Headers/DasboardHead';

const Package = () => {
	const [ isToggleStatistics, setToggleStatistics ] = useState(false);

	return (
		<div id="dashboard-package">
			<DasboardHead />
			<Charts onClickToggle={() => setToggleStatistics(!isToggleStatistics)} toggle={isToggleStatistics} />
			<Availability />
			<Details />
		</div>
	);
};

export default Package;
