import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormWrapper = (props) => {
	return (
		<div className="form-wrapper">
			<div className="content">{props.children}</div>
		</div>
	);
};

FormWrapper.propTypes = {};

export default FormWrapper;
