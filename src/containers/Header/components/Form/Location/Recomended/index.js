import React, { useState, useRef } from 'react';

import './styles.scss';
import PropTypes from 'prop-types';

const SearchLocationRecomended = (props) => {
	const refItems = useRef(null);

	const handleClick = (param) => {
		if (param === 'btn-next') refItems.current.scrollLeft += 700;
		if (param === 'btn-prev') refItems.current.scrollLeft -= 700;
	};

	return (
		<div id="search-location-recomended" className={props.className}>
			<div className="search-location-tittle">
				<label
					id="vacation"
					className={props.vacStay === 'Vacations' ? 'active' : ''}
					onClick={props.onClickVacatons}
				>
					Vacations
				</label>
				<label
					id="staycation"
					className={props.vacStay === 'Staycations' ? 'active' : ''}
					onClick={props.onClickStaycations}
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
					{props.items}
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
