import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const variants = {
	hour: 24,
	minutes: 60
};

const TimeCounter = ({ variant, initial }) => {
	const init = initial ? initial : variant === 'hour' ? 1 : variant === 'minutes' ? 0 : '';
	const [ val, setValue ] = useState(init);
	const [ subShow, setSubShow ] = useState(false);
	const ref = useRef();
	const max = variants[variant];
	const min = variant === 'hour' ? 1 : variant === 'minutes' ? 0 : '';

	const handlePlus = () => {
		if (val < max) setValue((p) => p + 1);
	};
	const handleMin = () => {
		if (val > min) setValue((p) => p - 1);
	};

	const valDisplay = val < 10 ? '0' + val : val;

	const Item = () => {
		const arr = [];
		const index = variant === 'hour' ? 1 : variant === 'minutes' ? 0 : '';
		for (let i = index; i <= max; i++) {
			const display = i < 10 ? '0' + i : i;
			const last = i == max ? 'btn-tc-sub-last' : '';
			const className = 'btn-tc-sub ' + last;
			arr.push(
				<button
					className={className}
					key={'tc-sub-' + i}
					onClick={() => {
						setValue(i);
						setSubShow(false);
					}}
				>
					{display}
				</button>
			);
		}
		return arr.map((item) => item);
	};

	const handleClickOutside = (e) => {
		if (ref.current && e.target.contains(ref.current)) {
			setSubShow(false);
		}
	};

	useEffect(
		() => {
			document.addEventListener('click', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		},
		[ ref ]
	);

	const subActivate = subShow ? 'active' : '';
	const classSub = 'tc-sub-items ' + subActivate;

	return (
		<div ref={ref} className="time-counter">
			<button className="btn-tc-plus" onClick={handlePlus}>
				<img className="btn-tc-plus-icon" src="/icons/arrow-up-light-gray.svg" />
			</button>
			<div className="tc-wrapper">
				<button onClick={() => setSubShow(true)}>{valDisplay}</button>
				<input className="tc-input" value={val} onChange={(e) => setValue(e.target.current.value)} />
				<div className={classSub}>
					<Item />
				</div>
			</div>
			<button className="btn-tc-min" onClick={handleMin}>
				<img className="btn-tc-min-icon" src="/icons/arrow-down-light-gray.svg" />
			</button>
		</div>
	);
};
TimeCounter.defaultProps = {
	variant: 'hour'
};
TimeCounter.propTypes = {
	hour: PropTypes.string,
	init: PropTypes.number
};

export default TimeCounter;
