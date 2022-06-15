import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'components/Button';
import H from 'components/H';

const ProductCard = (props) => {
	const scrollRef = useRef(null);
	const [ count, setCount ] = useState(1);
	const [ btnNextIsActive, setBtnNextIsActive ] = useState(false);
	const [ btnPrevIsActive, setBtnPrevIsActive ] = useState(false);
	const [ mouseOver, setMouseOver ] = useState(false);

	useEffect(() => {
		if (mouseOver) {
			setBtnNextIsActive(true);
			setBtnPrevIsActive(true);
			if (count === 1) setBtnPrevIsActive(false);
			if (count > 1) setBtnPrevIsActive(true);
			if (count === props.imagesUrl.length) setBtnNextIsActive(false);
		} else {
			setBtnNextIsActive(false);
			setBtnPrevIsActive(false);
		}
	});

	const handleClick = (param) => {
		if (param === 'btn-next' && count < props.imagesUrl.length) {
			scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
			setCount(count + 1);
		}
		if (param === 'btn-prev' && count > 1) {
			scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
			setCount(count - 1);
		}
	};

	return (
		<div id="product-card">
			<div className="pictures" onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
				<Button
					className={btnPrevIsActive ? 'btn-prev active' : 'btn-prev'}
					type="button"
					children={'<'}
					onClick={() => handleClick('btn-prev')}
				/>
				<Button
					className={btnNextIsActive ? 'btn-next active' : 'btn-next'}
					type="button"
					children={'>'}
					onClick={() => handleClick('btn-next')}
				/>
				<Button type="link" href={'product/' + props.id}>
					<div className="images" ref={scrollRef}>
						<img src={props.imagesUrl[0].url} alt="" />
						<img src={props.imagesUrl[0].url} alt="" />
						<img src={props.imagesUrl[0].url} alt="" />
						<img src={props.imagesUrl[0].url} alt="" />
					</div>
				</Button>
				<div className="card-dots">
					{props.imagesUrl.length > 1 &&
						props.imagesUrl.map((item, i) => {
							return <span key={'dot' + i} className={count === i + 1 ? 'dot active' : 'dot'} />;
						})}
				</div>
			</div>
			<div className="description">
				<div className="description-head">
					<H type="4" text600 className="tittle" childrend={props.tittle} />
					<div>{props.rate}</div>
				</div>
				<div className="location">{props.location}</div>
				<div className="date">{props.date}</div>
				<div className="budget">
					${props.budget} / <span>person</span>
				</div>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	tittle: PropTypes.string
};

export default ProductCard;
