import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'components/Button';
import H from 'components/H';

const ProductCard = (props) => {
	const scrollRef = useRef(null);

	const [ btnNextIsActive, setBtnNextIsActive ] = useState(false);
	const [ btnPrevIsActive, setBtnPrevIsActive ] = useState(false);

	useEffect(() => {});
	const handleClick = (param) => {
		if (scrollRef.current.scrollLeft < scrollRef.current.offsetWidth + 20) {
			setBtnPrevIsActive(false);
		}
		if (scrollRef.current.scrollLeft < scrollRef.current.offsetWidth + 20) {
			setBtnPrevIsActive(false);
		}
		if (param === 'btn-next') {
			scrollRef.current.scrollLeft += scrollRef.current.getBoundingClientRect().width;
			setBtnPrevIsActive(true);
		}
		if (param === 'btn-prev') {
			scrollRef.current.scrollLeft -= scrollRef.current.getBoundingClientRect().width;
		}
	};

	return (
		<div id="product-card">
			<div
				className="pictures"
				onMouseOver={() => {
					setBtnNextIsActive(true);
					scrollRef.current.scrollLeft === 0 ? setBtnPrevIsActive(false) : setBtnPrevIsActive(true);
				}}
				onMouseOut={() => {
					setBtnNextIsActive(false);
					setBtnPrevIsActive(false);
				}}
			>
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
				<div className="images" ref={scrollRef}>
					<img src={props.imagesUrl[0].url} alt="" />
					<img src={props.imagesUrl[0].url} alt="" />
					<img src={props.imagesUrl[0].url} alt="" />
				</div>

				<div className="card-dots">
					{props.imagesUrl.map((item, i) => {
						return <span key={'dot' + i} />;
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
