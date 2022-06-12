import Input from 'components/Input';
import React, { useState } from 'react';
import Button from 'components/Button';
import './styles.scss';
import _countriesData from 'json/countries.json';
import PropTypes from 'prop-types';
import SearchDate from '../Form/Date/SearchDate';
import SearchPax from '../Form/Pax/SearchPax';
import SearchLocationRecomended from '../Form/Location/Recomended';
import SearchLocationManual from '../Form/Location/Manual';
import _dataVacStay from 'json/vacations-staycations-recomendation.json';
import { useSelector } from 'react-redux';

const HeaderBottom = (props, ref) => {
	const [ locationIsShowed, locSetIsShowed ] = useState(true);
	const [ dateIsShowed, dateSetIsShowed ] = useState(false);
	const [ peopleIsShowed, peopleSetIsShowed ] = useState(false);
	const [ _leftIsShowed, _leftSetIsShowed ] = useState(false);
	const [ _rightIsShowed, _rightSetIsShowed ] = useState(false);
	const [ locationType, setLocationType ] = useState('recomended');
	const [ manualInputLocation, setManualInputLocation ] = useState([]);
	const [ inputLocationVal, setInputLocationVal ] = useState('');
	const [ inputDateVal, setInputDateVal ] = useState('');
	const [ isCount, setIsCount ] = useState(0);
	const [ vacStay, setVacStay ] = useState('Vacations');
	const isActive = props.isActive ? 'active' : 'hide';
	const dateValue = useSelector((state) => state.searchInputDate.value);
	console.log(dateValue);
	const [ _dataVS, setDataVs ] = useState(_dataVacStay.vacations);

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

	const handleClickLocation = () => {
		console.log('cek');
	};

	const handleChange = (e) => {
		setInputLocationVal(e.target.value);
		if (e.target.value) {
			setLocationType('manual');
		} else {
			setLocationType('recomended');
		}

		let regex = new RegExp(e.target.value, 'i');
		const regexResult = _countriesData.filter((item) => {
			return item.capital.match(regex) ? item : null;
		});
		setManualInputLocation(regexResult);
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
						value={inputLocationVal}
					/>
				</div>
				<div
					id="search-input-date"
					className={dateIsShowed ? 'active' : ''}
					onClick={() => handleClick('date')}
				>
					<span className={_leftIsShowed ? '_left' : '_left hide'} />
					<label>Date</label>
					<div id="input-date">{dateValue}</div>
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
				{locationType === 'recomended' && (
					<SearchLocationRecomended
						className={locationIsShowed && isActive === 'active' ? 'active' : ''}
						items={_dataVS.map((item, i) => {
							return (
								<div
									key={'vr' + i}
									className="item"
									onClick={() => setInputLocationVal(vacStay + ' ' + item.tittle)}
								>
									<figure>
										<img src={item.image} alt="" />
									</figure>
									<label>{item.tittle}</label>
								</div>
							);
						})}
						onClickVacatons={() => {
							setVacStay('Vacations');
							setDataVs(_dataVacStay.vacations);
						}}
						onClickStaycations={() => {
							setVacStay('Staycations');
							setDataVs(_dataVacStay.staycations);
						}}
						vacStay={vacStay}
					/>
				)}
				{locationType === 'manual' && (
					<SearchLocationManual
						data={manualInputLocation}
						className={locationIsShowed && isActive === 'active' ? 'active' : ''}
						onClick={handleClickLocation}
					/>
				)}
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
