import React, { useState, useRef } from 'react';
import Button from 'components/Button';
import data from 'json/vacations-staycations-recomendation.json';
import './styles.scss';
import PropTypes from 'prop-types';

const SearchLocationRecomended = (props) => {
	const [ isShowed, setIsShowed ] = useState('vacation');
	const [ _data, setData ] = useState(data.vacations);
	const refItems = useRef(null);

	const handleClick = (param) => {
		if (param === 'vacation') {
			setIsShowed('vacation');
			setData(data.vacations);
		}
		if (param === 'staycation') {
			setIsShowed('staycation');
			setData(data.staycations);
		}
		if (param === 'btn-next') refItems.current.scrollLeft += 700;
		if (param === 'btn-prev') refItems.current.scrollLeft -= 700;
	};

	return (
		<div id="search-location-recomended" className={props.className}>
			<div className="search-location-tittle">
				<label
					id="vacation"
					className={isShowed === 'vacation' ? 'active' : ''}
					onClick={() => handleClick('vacation')}
				>
					Vacation
				</label>
				<label
					id="staycation"
					className={isShowed === 'staycation' ? 'active' : ''}
					onClick={() => handleClick('staycation')}
				>
					Staycation
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
					{_data.map((item, i) => {
						return (
							<div key={'vr' + i} className="item" onClick={handleClickLocation}>
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
							<img src="" />
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
	onClick: PropTypes.func
};

export default SearchLocationRecomended;