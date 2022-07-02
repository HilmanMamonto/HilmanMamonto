import React from 'react';
import PropTypes from 'prop-types';

const Ta = ({ onChange, value, id, name }) => {
	return (
		<div>
			<textarea id={id} value={value} name={name} onChange={onChange} />
		</div>
	);
};

Ta.propTypes = {};

export default Ta;
