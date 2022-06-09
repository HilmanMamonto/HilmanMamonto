import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LayoutImg = (props) => {
	return (
		<figure className="img-staycation-choosed">
			<div className="left">
				<img />
			</div>
			<div className="right">
				<img />
				<img />
			</div>
		</figure>
	);
};

LayoutImg.propTypes = {};

export default LayoutImg;
