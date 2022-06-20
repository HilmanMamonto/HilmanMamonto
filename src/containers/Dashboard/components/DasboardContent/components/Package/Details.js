import Button from 'components/Button';
import H from 'components/H';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const dataStaycation = [
	{
		tittle: 'Red Doors',
		imgUrl: '/andy/andy-bromo-1.jpg',
		budget: 240
	},
	{
		tittle: 'Red Doors',
		imgUrl: '/andy/andy-bromo-1.jpg'
	},
	{
		tittle: 'Red Doors',
		imgUrl: '/andy/andy-bromo-1.jpg'
	},
	{
		tittle: 'Red Doors',
		imgUrl: '/andy/andy-bromo-1.jpg'
	}
];

const Details = () => {
	const refItemsStay = useRef(null);
	const [ btnPrev, setBtnPrev ] = useState(true);
	const [ btnNext, setBtnNext ] = useState(true);
	const [ scrollLeft, setScrollLeft ] = useState(null);

	const handleClick = (param) => {
		if (refItemsStay) {
			if (param === 'btn-next') refItemsStay.current.scrollLeft += 200;
			if (param === 'btn-prev') refItemsStay.current.scrollLeft -= 200;
		}
	};

	return (
		<div id="details">
			<div className="head">
				<H type="3" childrend={'Details'} text600 />
				<Button type="button" className="btn" children={'edit'} textPrimary />
			</div>
			<div className="items">
				<div className="card vacations-wrapper">
					<img src="/andy/andy-bromo-1.jpg" alt="" />
					<div className="head-tittle">
						<span className="tittle">Bromo Tengger Semeru</span>
						<span className="rate">4.0</span>
					</div>
					<div className="sub-tittle">Sub tittle</div>
					<div className="foot">
						<span>/night</span>
						<Button className="btn" type="button" isPrimary textWhite children={'edit'} />
					</div>
				</div>
				<div className="staycations-wrapper">
					<div
						className="items-staycations"
						style={{ gridTemplateColumns: 'repeat(' + dataStaycation.length + ', auto)' }}
						ref={refItemsStay}
					>
						{dataStaycation.map((item, i) => {
							return (
								<div key={'dash-stay' + i} className="card">
									<img src="/andy/andy-bromo-1.jpg" alt="" />
									<div className="head-tittle">
										<span className="tittle">{item.tittle}</span>
										<span className="rate">4.0</span>
									</div>
									<div className="sub-tittle">Sub tittle</div>
									<div className="foot">
										<span>${item.budget}/night</span>
										<Button className="btn" type="button" isPrimary textWhite children={'edit'} />
									</div>
								</div>
							);
						})}
					</div>
					{btnNext && (
						<Button
							onClick={() => handleClick('btn-next')}
							type="button"
							className="btn-next"
							children={'>'}
							isWhite
						/>
					)}
					{btnPrev && (
						<Button
							onClick={() => handleClick('btn-prev')}
							type="button"
							className="btn-prev"
							children={'<'}
							isWhite
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Details;
