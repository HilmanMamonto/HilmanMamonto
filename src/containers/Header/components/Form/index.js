import React from 'react';
import PropTypes from 'prop-types';

const FormSearch = (props) => {
	const [ locationIsShowed, locSetIsShowed ] = useState(true);
	const [ dateIsShowed, dateSetIsShowed ] = useState(false);
	const [ peopleIsShowed, peopleSetIsShowed ] = useState(false);
	const [ _leftIsShowed, _leftSetIsShowed ] = useState(false);
	const [ _rightIsShowed, _rightSetIsShowed ] = useState(false);
	const [ locationType, setLocationType ] = useState('recomended');

	const [ inputLocation, setInputLocation ] = useState([]);

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

	//location
	const handleClickLocation = (e) => {
		console.log('e');
	};

	const [ isCount, setIsCount ] = useState(0);
	const handleCount = (e) => {
		if (e.target.className === 'btn-plus') setIsCount(isCount + 1);
		if (e.target.className === 'btn-min' && isCount > 0) setIsCount(isCount - 1);
	};
	return (
		<form className={isActive} ref={ref}>
			<div
				id="search-input-location"
				className={locationIsShowed ? 'input location active' : 'input location'}
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
				className={dateIsShowed ? 'input date active' : 'input date'}
				onClick={() => handleClick('date')}
			>
				<span className={_leftIsShowed ? '_left' : '_left hide'} />
				<label>Date</label>
				<div id="input-date">Any time</div>
				<span className={_rightIsShowed ? '_right' : '_right hide'} />
			</div>
			<div
				id="search-input-people"
				className={peopleIsShowed ? 'input people active' : 'input people'}
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
				onClick={handleClickLocation}
			/>
			<SearchDate className={dateIsShowed && isActive === 'active' ? 'active' : ''} />
			<SearchPax
				onClick={handleCount}
				value={isCount}
				className={peopleIsShowed && isActive === 'active' ? 'active' : ''}
			/>
		</form>
	);
};

FormSearch.propTypes = {};

export default FormSearch;
