import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'components/Button';

const TittleSelectedStaycations = (props) => {
	return (
		<div id="tittle-staycation-choosed">
			<div>
				<div className="head">
					<div>Villa Tengger Semeru</div>
					<span />
					<label>2-8 mei</label>
				</div>
				<div className="foot">
					<Button type="a" href="/" children="5.0" textLightGray hasUnderline />
					<Button type="a" href="/" children="Reviews" textLightGray hasUnderline />
					<Button type="a" href="/" children="Malang, Tengger Semeru" textLightGray hasUnderline />
				</div>
			</div>
			<div className="budget">
				<label>
					$32 / <span>night</span>
				</label>
			</div>
		</div>
	);
};

TittleSelectedStaycations.propTypes = {};

export default TittleSelectedStaycations;
