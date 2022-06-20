import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
	const arrClass = [ props.className ];

	return (
		<select id={props.id} className={arrClass.join(' ')}>
			{props.item.map((item) => {
				if (item.defaultValue) {
					return <option value="">{item.defaultValue}</option>;
				} else {
					return <option value={item.value}>{item.name}</option>;
				}
			})}
		</select>
	);
};

Select.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	defaultValue: PropTypes.string,
	item: PropTypes.array
};

export default Select;
