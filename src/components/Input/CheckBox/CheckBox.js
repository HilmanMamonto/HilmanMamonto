import React from 'react';
import PropTypes from 'prop-types';
import '../main_styles.scss';
import Container from 'Layout/Container';
import './styles.scss';
import '../main_styles.scss';
import Icon from 'components/Icons';
import { useState } from 'react';

const InputCheckBox = (props) => {
	const [ toggle, setToggle ] = useState(false);

	const items = props.data.map((item, i) => {
		return (
			<div className="item" key={'option-' + i}>
				<span>{item.name}</span>
				<input type="checkbox" value="Bike" />
			</div>
		);
	});

	const size = props.size;
	const topClass = ' input ' + size;
	const wrapClass = ' input-wrapper ' + size;
	const label = props.label ? (
		<Container bottom="xsmall">
			<label>{props.label}</label>
		</Container>
	) : null;
	const iconClassName = toggle ? 'ic active' : 'ic';
	const itemsClassName = toggle ? 'items active' : 'items';

	return (
		<div className={topClass}>
			{label}
			<div className={wrapClass}>
				<div className="select-checkbox">
					<div className="head" onClick={() => setToggle(!toggle)}>
						<span>items</span>
						<Icon variant="arrow-up" className={iconClassName} />
					</div>
					<div className={itemsClassName}>{items}</div>
				</div>
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
