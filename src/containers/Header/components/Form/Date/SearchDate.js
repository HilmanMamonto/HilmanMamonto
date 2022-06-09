import React, { useEffect, useState } from 'react';
import './SearchDate.scss';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const SearchDate = (props) => {
	const [ state, setState ] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);

	const datePicked = () => {
		const startDay = format(state[0].startDate, 'd');
		const endDay = format(state[0].endDate, 'd');
		const startMonth = format(state[0].startDate, 'MMM');
		const endMonth = format(state[0].endDate, 'MMM');
		const startYear = format(state[0].startDate, 'yyyy');
		const endYear = format(state[0].endDate, 'yyyy');

		let result = '';

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
				onChange={(item) => setState([ item.selection ])}
				moveRangeOnFirstSelection={false}
				dayContentRenderer={costumDayContent}
				ranges={state}
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
