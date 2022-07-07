import React from 'react';
import PropTypes from 'prop-types';
import '../main_styles.scss';
import Container from 'Layout/Container';
import './styles.scss';
import '../main_styles.scss';
import Icon from 'components/Icons';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Button from 'components/NewButton/Button';

const sizes = {
	small: 'icb-small ',
	medium: 'icb-medium ',
	large: 'icb-large ',
	undefined: ''
};

const InputCheckBox = ({ size, data, label }) => {
	const [ toggle, setToggle ] = useState(false);

	const [ values, setValues ] = useState('');

	const ref = useRef();

	const container = 'input-select-checkbox ' + sizes[size];
	const wrapClass = ' isc-wrapper ' + sizes[size];
	const iconClassName = toggle ? 'ic active' : 'ic';
	const itemsClassName = toggle ? 'items active' : 'items';

	const handleClickOutside = (e) => {
		if (ref && !ref.current.contains(e.target)) {
			setToggle(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	const items = data.map((item, i) => {
		return (
			<div className="item" key={'option-' + i}>
				<span>{item}</span>
				<input name={item} type="checkbox" value={item} />
			</div>
		);
	});
	const numChecked = '';
	const selected =
		numChecked === 0
			? 'select items'
			: numChecked === 1 ? numChecked + ' item selected' : numChecked + ' items selected';

	return (
		<div ref={ref} className={container}>
			<label className="icb-label">{label}</label>
			<div className={wrapClass}>
				<div className="select-checkbox">
					<div className="head" onClick={() => setToggle(!toggle)}>
						<span>{selected}</span>
						<Icon variant="arrow-up" className={iconClassName} />
					</div>
				</div>
			</div>
			<div className={itemsClassName}>
				{items}
				<Button className="mt-xs" shadow="small" fullWidth label="sellect all" justifyContent="center" />
			</div>
		</div>
	);
};

InputCheckBox.propTypes = {
	data: PropTypes.array,
	className: PropTypes.string
};

InputCheckBox.defaultProps = {
	size: 'medium'
};

export default InputCheckBox;
