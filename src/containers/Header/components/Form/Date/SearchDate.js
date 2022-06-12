import React, { useState, useEffect } from 'react';
import './SearchDate.scss';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useDispatch } from 'react-redux';
import { changeDate } from 'redux/features/search';

const SearchDate = (props) => {
	const dispatch = useDispatch();
	const [ dateState, setDateState ] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);
	const [ test, setTest ] = useState('');
	useEffect(() => {
		dispatch(changeDate(datePicked()));
	});

	let result = '';
	const datePicked = () => {
		const startDay = format(dateState[0].startDate, 'd');
		const endDay = format(dateState[0].endDate, 'd');
		const startMonth = format(dateState[0].startDate, 'MMM');
		const endMonth = format(dateState[0].endDate, 'MMM');
		const startYear = format(dateState[0].startDate, 'yyyy');
		const endYear = format(dateState[0].endDate, 'yyyy');

		if (startMonth === endMonth) {
			if (startDay === endDay) result = startDay + ' ' + startMonth + ' ' + startYear;
			if (startDay !== endDay) result = startDay + '-' + endDay + ' ' + startMonth + ' ' + startYear;
		}

		if (startMonth !== endMonth) {
			result = startDay + ' ' + startMonth + ' - ' + endDay + ' ' + endMonth + ' ' + startYear;
		}

		if (startYear !== endYear) {
			result = startDay + ' ' + startMonth + ' ' + startYear + ' - ' + endDay + ' ' + endMonth + ' ' + endYear;
		}

		return result;
	};

	const costumDayContent = (day) => {
		// return (
		// 	<div>
		// 		<div className="day-extra-dash" />
		// 		<span>{format(day, 'd')}</span>
		// 	</div>
		// );
	};

	return (
		<div id="search-date" className={props.className}>
			<div className="date-choosed">{datePicked()}</div>
			<DateRange
				editableDateInputs={true}
				onChange={(item) => {
					setDateState([ item.selection ]);
				}}
				moveRangeOnFirstSelection={false}
				dayContentRenderer={costumDayContent}
				ranges={dateState}
				months={2}
				direction="horizontal"
				rangeColors={[ '#373737' ]}
				color="red"
				showMonthAndYearPickers={false}
			/>
		</div>
	);
};

export default SearchDate;
