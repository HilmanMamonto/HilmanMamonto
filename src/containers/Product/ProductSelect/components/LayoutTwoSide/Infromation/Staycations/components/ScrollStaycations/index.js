import Button from 'components/Button';
import React, { useRef, useState, useEffect } from 'react';
import './styles.scss';

const ScrollStaycations = () => {
	const ref = useRef(null);
	const [ btnNext, setBtnNext ] = useState(true);
	const [ btnPrev, setBtnPrev ] = useState(true);

	const handleClick = (param) => {
		if (param === 'btn-next') {
			ref.current.scrollLeft += 600;
		}
		if (param === 'btn-prev') {
			ref.current.scrollLeft -= 600;
		}
	};

	const handleScroll = () => {
		if (ref.current.scrollLeft === 0) {
			setBtnPrev(false);
		}
		if (ref.current.scrollLeft > 0) {
			setBtnPrev(true);
		}
		if (parseInt(ref.current.scrollLeft / ref.current.offsetWidth * 100) > 100) {
			setBtnNext(false);
		} else {
			setBtnNext(true);
		}
	};

	return (
		<div id="scroll-staycations" className="staycations-items">
			<Button
				isActive={btnPrev}
				className="btn-prev"
				type="button"
				isRounded
				children={'<'}
				isWhite
				onClick={() => handleClick('btn-prev')}
			/>
			<div className="scroll" ref={ref} onScroll={handleScroll}>
				<div className="items">
					<figure>
						<img />
					</figure>
					<div className="info">
						<label>
							$32 <span>night</span>
						</label>
						<label className="info-tittle">Villa Tengger Semeru</label>
						<label className="rate">5.0</label>
					</div>
				</div>
				<div className="items">
					<figure>
						<img />
					</figure>
					<div className="info">
						<label>
							$32 <span>night</span>
						</label>
						<label className="info-tittle">Villa Tengger Semeru</label>
						<label className="rate">5.0</label>
					</div>
				</div>
				<div className="items">
					<figure>
						<img />
					</figure>
					<div className="info">
						<label>
							$32 <span>night</span>
						</label>
						<label className="info-tittle">Villa Tengger Semeru</label>
						<label className="rate">5.0</label>
					</div>
				</div>
				<div className="items">
					<figure>
						<img />
					</figure>
					<div className="info">
						<label>
							$32 <span>night</span>
						</label>
						<label className="info-tittle">Villa Tengger Semeru</label>
						<label className="rate">5.0</label>
					</div>
				</div>
			</div>
			<Button
				isActive={btnNext}
				className="btn-next"
				type="button"
				isRounded
				children={'>'}
				isWhite
				onClick={() => handleClick('btn-next')}
			/>
		</div>
	);
};

export default ScrollStaycations;
