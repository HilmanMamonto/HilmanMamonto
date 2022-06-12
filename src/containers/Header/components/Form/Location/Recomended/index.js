import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import _dataVacStay from 'json/vacations-staycations-recomendation.json';
import { changeLocation } from 'redux/features/searchInputLocation';

const SearchLocationRecomended = (props) => {
	const refItems = useRef(null);
	const dispatch = useDispatch();
	const [ vacStay, setVacStay ] = useState('Vacations');
	const [ dataVacStay, setDataVacStay ] = useState(_dataVacStay.vacations);

	useEffect(() => {
		if (vacStay === 'Vacations') setDataVacStay(_dataVacStay.vacations);
		if (vacStay === 'Staycations') setDataVacStay(_dataVacStay.staycations);
	});

	const handleClick = (param) => {
		if (param === 'btn-next') refItems.current.scrollLeft += 700;
		if (param === 'btn-prev') refItems.current.scrollLeft -= 700;
	};

	return (
		<div id="search-location-recomended" className={props.className}>
			<div className="search-location-tittle">
				<label
					id="vacation"
					className={vacStay === 'Vacations' ? 'active' : ''}
					onClick={() => setVacStay('Vacations')}
				>
					Vacations
				</label>
				<label
					id="staycation"
					className={vacStay === 'Staycations' ? 'active' : ''}
					onClick={() => setVacStay('Staycations')}
				>
					Staycations
				</label>
			</div>
			<div className="location-categories">
				<div className="btn btn-prev" onClick={() => handleClick('btn-prev')}>
					-
				</div>
				<div className="btn btn-next" onClick={() => handleClick('btn-next')}>
					+
				</div>
				<div className="items" ref={refItems}>
					{dataVacStay.map((item, i) => {
						return (
							<div
								key={'vr' + i}
								className="item"
								onClick={() => dispatch(changeLocation(vacStay + ' ' + item.tittle))}
							>
								<figure>
									<img src={item.image} alt="" />
								</figure>
								<label>{item.tittle}</label>
							</div>
						);
					})}
				</div>
			</div>

			<div className="recent">
				<label>Recent</label>
				<div className="items">
					<div className="item">
						<figure>
							<img src="" alt="" />
						</figure>
						<div className="details">
							<label>Mountain</label>
							<span>2 mei 2022</span>
						</div>
					</div>
					<div className="item">
						<figure>
							<img src="" alt="" />
						</figure>
						<div className="details">
							<label>Mountain</label>
							<span>2 mei 2022</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SearchLocationRecomended.propTypes = {
	onClick: PropTypes.func,
	vacStayToggle: PropTypes.bool,
	onClickStaycations: PropTypes.func,
	onClickVacatons: PropTypes.func
};

export default SearchLocationRecomended;
