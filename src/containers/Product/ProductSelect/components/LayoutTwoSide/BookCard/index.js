import React from 'react';
import Button from 'components/Button';
import './styles.scss';

const BookCard = (props) => {
	return (
		<div id="product-card-selected">
			<div className="tittle">
				<label>$32 </label>
				<span>/ pax</span>
			</div>
			<div className="form">
				<div className="input day">
					<div>
						<label>PICK YOUR DAY</label>
						<span>9 / 25 / 2022</span>
					</div>
					<Button type="button" children={<img src="arrow-down.svg" alt="" />} />
				</div>
				<div className="input visitors">
					<div>
						<label>VISITORS</label>
						<span>
							2 <span>People</span>
						</span>
					</div>
					<Button type="button" children={<img src="arrow-down.svg" alt="" />} />
				</div>
				<div className="input staycation">
					<div>
						<label>STAYCATION</label>
						<span>
							Villa Tengger... <label>9 - 10 mei</label>
						</span>
					</div>
					<Button type="button" children={<img src="arrow-down.svg" alt="" />} />
				</div>
			</div>
			<div className="more-information">
				<div className="sub-information">
					<div className="inf">
						<label>Free Cancellation</label>
						<label>Rescheduleable</label>
					</div>
					<div>
						<label>2 pax (tour)</label>
						<span>$64</span>
					</div>
					<div>
						<label>staycation</label>
						<span>$145</span>
					</div>
				</div>
				<div className="total">
					<label>Total</label>
					<span>$209</span>
				</div>
			</div>
			<Button
				className="btn-book"
				type="button"
				hasShadow
				children={
					<div>
						<span>Book</span>
						<img src="arrow-right-white.svg" alt="" />
					</div>
				}
				textWhite
				isSecondary
			/>
		</div>
	);
};

export default BookCard;
