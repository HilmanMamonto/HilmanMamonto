import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const TimeCounter = (props) => {
	const [ val, setValue ] = useState(0);

	useEffect(() => {}, [ val ]);
	return (
		<div className="time-counter">
			<button onClick={() => setValue((p) => p + 1)}>+</button>
			<input type="time" />
			<button onClick={() => setValue((p) => p - 1)}>-</button>
		</div>
	);
};

TimeCounter.propTypes = {};

export default TimeCounter;
