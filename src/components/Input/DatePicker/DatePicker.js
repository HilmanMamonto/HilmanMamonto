import PropTypes from 'prop-types';
import React from 'react';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import { useState } from 'react';
import { useEffect } from 'react';
import './styles.scss';

const DatePicker = (props) => {
	let arr = [];
	const storage = localStorage.getItem('addPackageAvailability');
	if (storage) arr = JSON.parse(storage);

	const handleSelect = (date) => {
		const newDate = format(date, 'yyy-MM-dd');
		const found = arr.find((item) => item === newDate);
		const result = arr.filter((item) => item != found);
		found ? (arr = [ ...result ]) : (arr = [ ...arr, newDate ]);
		localStorage.setItem('addPackageAvailability', JSON.stringify(arr));
	};

	const handleDay = (date) => {
		const day = format(date, 'd');
		const newDate = format(date, 'yyy-MM-dd');
		let result = '';
		arr.map((item) => {
			if (newDate === item) {
				result = item;
			}
		});

		return result != '' ? <span className="dp-dot">{day}</span> : <span>{day}</span>;
	};

	return (
		<div className="date-picker">
			<Calendar
				className="dp-wrapper"
				date={new Date()}
				onChange={handleSelect}
				color="#212121"
				fixedHeight
				dayContentRenderer={handleDay}
				showMonthAndYearPickers={false}
				minDate={new Date()}
				nextButton="test"
				calendarFocus="backwards"
				preventSnapRefocus={true}
			/>
		</div>
	);
};

DatePicker.propTypes = {};

export default DatePicker;
