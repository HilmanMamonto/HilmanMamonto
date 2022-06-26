import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'components/NewButton/Button';
import Icons from 'components/Icons';

const WalletInfo = ({ label }) => {
	return (
		<div className="wallet-info-wrapper">
			<div className="wallet-info">
				<label>Total Earn</label>
				<span>${label}</span>
			</div>
			<div className="btn-wallet">
				<Button
					justifyContent="space-betwen"
					color="primary"
					rightIcon={<Icons variant="checkmark" />}
					fullWidth
					label="witdraw"
					loading
				/>
			</div>
		</div>
	);
};

WalletInfo.defaultProps = {
	label: 100000000
};

WalletInfo.propTypes = {
	size: PropTypes.string
};

export default WalletInfo;
