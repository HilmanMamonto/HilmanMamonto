import H from 'components/H';
import React from 'react';
import './styles.scss';

const MoreThings = () => {
	return (
		<div id="more-things">
			<div className="more-things">
				<H type="2" textRegular isGray childrend={'More thing you should know'} />
				<span>Please bring a mask and a flashlight</span>
				<span>Please wear shoes instead of sandals</span>
			</div>
			<div className="pickup-services">
				<H type="2" textRegular childrend={'Pick-up services'} />
				<span>Free Pick-up Available. Malang city area except for the station</span>
			</div>
		</div>
	);
};

export default MoreThings;
