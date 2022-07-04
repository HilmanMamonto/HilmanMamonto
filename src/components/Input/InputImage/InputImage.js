import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

const InputImage = ({ onChange }) => {
	const [ value, setValue ] = useState();

	useEffect(
		() => {
			if (value) onChange(value);
		},
		[ value ]
	);

	const handleChange = (e) => {
		if (e.target.files.length != 0) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setValue(e.target.result);
			};

			reader.readAsDataURL(e.target.files[0]);
		}
	};

	return (
		<div>
			<input type="file" onChange={handleChange} />
		</div>
	);
};

InputImage.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default InputImage;
