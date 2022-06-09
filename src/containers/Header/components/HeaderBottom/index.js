import Input from 'components/Input';
import React, { useState } from 'react';
import Button from 'components/Button';
import './styles.scss';
import _countriesData from 'json/countries.json';
import PropTypes from 'prop-types';
import SearchDate from '../Form/Date/SearchDate';
import SearchPax from '../Form/Pax/SearchPax';
import SearchLocation from '../Form/Location';

const HeaderBottom = (props, ref) => {
	const [ locationIsShowed, locSetIsShowed ] = useState(true);
	const [ dateIsShowed, dateSetIsShowed ] = useState(false);
	const [ peopleIsShowed, peopleSetIsShowed ] = useState(false);
	const [ _leftIsShowed, _leftSetIsShowed ] = useState(false);
	const [ _rightIsShowed, _rightSetIsShowed ] = useState(false);
	const [ locationType, setLocationType ] = useState('recomended');
	const [ inputLocation, setInputLocation ] = useState([]);
	const [ isCount, setIsCount ] = useState(0);

	const isActive = props.isActive ? 'active' : 'hide';

	const handleClick = (param) => {
		locSetIsShowed(false);
		dateSetIsShowed(false);
		peopleSetIsShowed(false);
		_leftSetIsShowed(false);
		_rightSetIsShowed(false);

		if (param === 'location') {
			locSetIsShowed(true);
			_leftSetIsShowed(false);
			_rightSetIsShowed(true);
		}
		if (param === 'date') dateSetIsShowed(true);
		if (param === 'people') {
			peopleSetIsShowed(true);
			_leftSetIsShowed(true);
			_rightSetIsShowed(false);
		}
	};

	const handleChange = (e) => {
		if (e.target.value) {
			setLocationType('manual');
		} else {
			setLocationType('recomended');
		}

		let regex = new RegExp(e.target.value, 'i');
		let result = [];
		_countriesData.map((val) => {
			if (val.capital.match(regex)) {
				result.push(val);
			}
		});
		setInputLocation(result);
	};

	const handleCount = (e) => {
		if (e.target.className === 'btn-plus') setIsCount(isCount + 1);
		if (e.target.className === 'btn-min' && isCount > 0) setIsCount(isCount - 1);
	};

	return (
		<div id="header-bottom-form-search" className={isActive} onClick={props.onClick}>
			<form className={isActive} ref={ref}>
				<div
					id="search-input-location"
					className={locationIsShowed ? 'active' : ''}
					onClick={() => handleClick('location')}
				>
					<label>Location</label>
					<Input
						id="input-location"
						placeholder="Where are you going?"
						onChange={handleChange}
						style={{ fontSize: '14px' }}
						autoFocus
					/>
				</div>
				<div
					id="search-input-date"
					className={dateIsShowed ? 'active' : ''}
					onClick={() => handleClick('date')}
				>
					<span className={_leftIsShowed ? '_left' : '_left hide'} />
					<label>Date</label>
					<div id="input-date">Any time</div>
					<span className={_rightIsShowed ? '_right' : '_right hide'} />
				</div>
				<div
					id="search-input-people"
					className={peopleIsShowed ? 'active' : ''}
					onClick={() => handleClick('people')}
				>
					<div className="input-people">
						<label>Who</label>
						<div id="input-people">{isCount ? isCount : 'Add'} people you love</div>
					</div>
					<Button type="button" isPrimary isRounded style={{ width: '42px', height: '42px' }} />
				</div>
				<SearchLocation
					data={inputLocation}
					type={locationType}
					className={locationIsShowed && isActive === 'active' ? 'active' : ''}
				/>
				<SearchDate className={dateIsShowed && isActive === 'active' ? 'active' : ''} />
				<SearchPax
					onClick={handleCount}
					value={isCount}
					className={peopleIsShowed && isActive === 'active' ? 'active' : ''}
				/>
			</form>
		</div>
	);
};

HeaderBottom.prototype = {
	isActive: PropTypes.bool
};

export default React.forwardRef(HeaderBottom);
