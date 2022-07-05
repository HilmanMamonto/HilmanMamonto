import IconButton from 'components/IconButton/IconButton';
import InputImage from 'components/Input/InputImage/InputImage';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.scss';
import 'animate.css';

const Images = () => {
	const store = JSON.parse(localStorage.getItem('images'));
	const initial = store ? store : [];
	const [ images, setImages ] = useState(initial);

	const handleDelete = (i) => {
		const filter = images.filter((item, index) => index != i);
		setImages(filter);
	};

	useEffect(
		() => {
			localStorage.setItem('images', JSON.stringify([ ...images ]));
		},
		[ images ]
	);

	const items = images.map((item, i) => {
		const key = 'ap-image' + i;
		return (
			<div
				key={key}
				className="ap-image-wrapper animate__animated animate__fadeInUp"
				style={{ animationDelay: 0.1 * i + 's' }}
			>
				<img className="ap-image" src={item} />
				<IconButton
					onClick={() => handleDelete(i)}
					variant="close-rounded-white"
					size="xlarge"
					className="btn-close-ap-image"
				/>
			</div>
		);
	});

	return (
		<div>
			<div className="ap-image-list">{items}</div>
			<InputImage className="mt-s mb-l" onChange={(data) => setImages((p) => [ ...p, data ])} />
		</div>
	);
};

export default Images;
