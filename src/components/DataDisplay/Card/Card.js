import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'components/NewButton/Button';
import ButtonRounded from 'components/ButtonRounded/ButtonRounded';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const sizes = {
	small: 'cdp-small ',
	medium: 'cdp-medium '
};

const Card = ({ size }) => {
	const refItems = useRef();
	const [ position, setPosition ] = useState(1);
	const [ btnPrev, setBtnPrev ] = useState('');
	const [ btnNext, setBtnNext ] = useState('');

	useEffect(() => {
		const maxPos = refItems.current.children.length;
		if (position === 1) {
			setBtnPrev('');
		} else {
			setBtnPrev('active');
		}
		if (position === maxPos) {
			setBtnNext('');
		} else {
			setBtnNext('active');
		}

		console.log(position);
	});

	const handleClick = (param) => {
		const interval = refItems.current.offsetWidth;
		const maxPos = refItems.current.children.length;
		if (param === 'next' && position < maxPos) {
			refItems.current.scrollLeft += interval;
			setPosition(position + 1);
		}

		if (param === 'prev' && position > 1) {
			refItems.current.scrollLeft -= interval;
			setPosition(position - 1);
		}
	};

	return (
		<div className={'card-dashboard-package ' + sizes[size]}>
			<div className="cdp-image-wrapper">
				<div ref={refItems} className="cdp-images-items">
					<img className="cdp-image" src="/andy/andy-bromo-1.jpg" alt="" />
					<img className="cdp-image" src="/andy/andy-bromo-1.jpg" alt="" />
					<img className="cdp-image" src="/andy/andy-bromo-1.jpg" alt="" />
				</div>
				<ButtonRounded onClick={async () => handleClick('prev')} className={'cdp-btn-prev ' + btnPrev} />
				<ButtonRounded onClick={async () => handleClick('next')} className={'cdp-btn-next ' + btnNext} />
			</div>
			<div className="cdp-head-tittle">
				<span className="cdp-tittle">Bromo Tengger Semeru</span>
				<span className="cdp-rate">4.0</span>
			</div>
			<div className="cdp-sub-tittle">Sub tittle</div>
			<div className="cdp-foot">
				<span>/night</span>
				<Button label="edit" size={size} />
			</div>
		</div>
	);
};

Card.defaultProps = {
	size: 'small'
};

Card.propTypes = {
	size: PropTypes.string
};

export default Card;
