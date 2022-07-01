import React from 'react';
import PropTypes from 'prop-types';

const Ta = ({ onChange, value }) => {
	return (
		<div>
			<textarea value={value} onChange={onChange} />
		</div>
	);
};

Ta.propTypes = {};

export default Ta;
