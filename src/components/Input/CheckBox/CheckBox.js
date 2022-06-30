import React from 'react';
import PropTypes from 'prop-types';
import '../main_styles.scss';
import Container from 'Layout/Container';
import './styles.scss';
import '../main_styles.scss';
import Icon from 'components/Icons';
import { useState } from 'react';

const sizes = {
	small: 'icb-small ',
	medium: 'icb-medium ',
	large: 'icb-large ',
	undefined: ''
};

const InputCheckBox = ({ size, ...props }) => {
	const [ toggle, setToggle ] = useState(false);

	const items = props.data.map((item, i) => {
		return (
			<div className="item" key={'option-' + i}>
				<span>{item.name}</span>
				<input type="checkbox" value="Bike" />
			</div>
		);
	});

	const container = 'input-select-checkbox ' + sizes[size];
	const wrapClass = ' isc-wrapper ' + sizes[size];
	const iconClassName = toggle ? 'ic active' : 'ic';
	const itemsClassName = toggle ? 'items active' : 'items';

	return (
		<div className={container}>
			<label className="icb-label">Max Pax</label>
			<div className={wrapClass}>
				<div className="select-checkbox">
					<div className="head" onClick={() => setToggle(!toggle)}>
						<span>items</span>
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
