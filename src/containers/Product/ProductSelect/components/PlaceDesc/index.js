import H from 'components/H';
import React from 'react';
import './styles.scss';

const PlaceDesc = () => {
	return (
		<div id="place-desc">
			<H type="2" childrend={'Description About This Place'} />
			<span>
				Immerse yourself in the wilderness, still within reach of civilization! WonderINN is literally a hidden
				gem; the unique design of the mirrored glass blends into the landscape so you can retreat to comfort and
				luxury as you watch the world pass by.
			</span>
		</div>
	);
};

export default PlaceDesc;
