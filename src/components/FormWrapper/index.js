import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useEffect } from 'react';
import { useRef } from 'react';

const FormWrapper = ({ children }) => {
	const ref = useRef();

	useEffect(
		() => {
			if (ref) ref.current.scroll(0, 0);
		},
		[ children ]
	);

	return (
		<div ref={ref} className="form-wrapper">
			<div className="content">{children}</div>
		</div>
	);
};

FormWrapper.propTypes = {};

export default FormWrapper;
