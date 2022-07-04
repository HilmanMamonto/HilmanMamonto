import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const weights = {
	bold: 'text-bold ',
	regular: 'text-regular ',
	light: 'text-light',
	ultralight: 'text-ultralight ',
	'100': 'text-100 ',
	'200': 'text-200 ',
	'300': 'text-300 ',
	'400': 'text-400 ',
	'500': 'text-500 ',
	'600': 'text-600 ',
	'700': 'text-700 ',
	'800': 'text-800 ',
	undefined: ''
};
const colors = {
	primary: 'text-pimary ',
	secondary: 'text-secondary ',
	gray: 'text-gray ',
	'light-gray': 'text-light-gray ',
	'ultralight-gray': 'text-ultralight-gray ',
	undefined: ''
};

const H = ({ weight, color, as, childrend, className }) => {
	const classContainer = 'h ' + weights[weight] + colors[color] + className;

	const elements = {
		h1: <h1 className={classContainer}>{childrend}</h1>,
		h2: <h2 className={classContainer}>{childrend}</h2>,
		h3: <h3 className={classContainer}>{childrend}</h3>,
		h4: <h4 className={classContainer}>{childrend}</h4>,
		h5: <h5 className={classContainer}>{childrend}</h5>,
		undefined: ''
	};

	return elements[as];
};

H.defaultProps = {
	as: 'h1',
	color: 'gray'
};

H.propTypes = {
	id: PropTypes.string,
	style: PropTypes.string,
	type: PropTypes.string,
	childrend: PropTypes.any,
	weight: PropTypes.string,
	colors: PropTypes.string,
	as: PropTypes.string
};

export default H;
