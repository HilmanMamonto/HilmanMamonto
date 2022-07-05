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

const sizes = {
	small: 'icb-small ',
	medium: 'icb-medium ',
	large: 'icb-large ',
	undefined: ''
};

const InputCheckBox = ({ size, data, label }) => {
	const [ toggle, setToggle ] = useState(false);

	const initial = data.map((item) => {
		const obj = new Object({ name: item, status: '' });
		return obj;
	});
	const [ values, setValues ] = useState(initial);

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

	const handleCheck = (e) => {
		const checked = e.target.checked ? 'checked' : '';
		const newValues = values.map((item) => {
			if (e.target.value === item.name) {
				return { name: item.name, status: checked };
			} else {
				return item;
			}
		});
		setValues(newValues);
	};

	const items = values.map((item, i) => {
		return (
			<div className="item" key={'option-' + i}>
				<span>{item.name}</span>
				<input type="checkbox" value={item.name} onChange={handleCheck} />
			</div>
		);
	});
	const numChecked = values.filter((item) => item.status === 'checked').length;
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
			<div className={itemsClassName}>{items}</div>
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
