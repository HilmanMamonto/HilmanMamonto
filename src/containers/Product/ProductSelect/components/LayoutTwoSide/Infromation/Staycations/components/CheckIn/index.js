import React, { useState } from 'react';
import PropTypes from 'prop-types';
import H from 'components/H';
import Button from 'components/Button';
import './styles.scss';

const CheckIn = (props) => {
	const [ checkInDate, setCheckInDate ] = useState();

	const handleClick = (param) => {
		if (param === 'checkIn') {
			console.log('cek in button clicked');
		}
		if (param === 'checkOut') {
			console.log('cek out button clicked');
		}
	};

	return (
		<div id="check-in">
			<H type="3" childrend={'Select check-in date'} isGray textRegular />
			<div className="from-wraper">
				<div className="form-input">
					<div className="in">
						<label>CheckIn</label>
						<Button
							type="button"
							children={'When you want to start?'}
							textLightGray
							onClick={() => handleClick('checkIn')}
						/>
					</div>
					<div className="out">
						<span />
						<div>
							<label>CheckOut</label>
							<Button
								type="button"
								children={'When you want to end?'}
								textLightGray
								onClick={() => handleClick('checkOut')}
							/>
						</div>
					</div>
				</div>
				<Button className={'btn-add-to-list'} type="button" children={'Add To List'} isPrimary textWhite />
			</div>
		</div>
	);
};

CheckIn.propTypes = {};

export default CheckIn;
