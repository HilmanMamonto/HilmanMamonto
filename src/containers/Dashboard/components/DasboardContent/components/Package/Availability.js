import Button from 'components/Button';
import React from 'react';
import { Calendar } from 'react-date-range';
import { format } from 'date-fns';
import './styles.scss';

const availability = [
	{
		packageName: 'Fushimi Inari taisha',
		dates: [
			{ day: 2, month: 7, year: 2022 },
			{ day: 6, month: 7, year: 2022 },
			{ day: 8, month: 7, year: 2022 },
			{ day: 11, month: 7, year: 2022 }
		]
	}
];

const Availability = () => {
	const costumDay = (date) => {
		const d = parseInt(format(date, 'd'));
		const m = parseInt(format(date, 'M'));
		let available = false;
		availability[0].dates.map((date) => {
			if (d === date.day && m === date.month) {
				available = true;
			}
		});
		return <span className={available ? 'available' : ''}>{d}</span>;
	};

	return (
		<div id="availability">
			<div className="scheduled">
				<div className="head">
					<div>
						<span>Scheduled</span>
						<Button type="button" className="btn-category" children={'all'} />
					</div>
					<Button type="button" className="btn" children={'set availability'} />
				</div>
				<div className="date">
					<Calendar
						direction="horizontal"
						months={2}
						showMonthAndYearPickers={false}
						color={'#212121'}
						dragSelectionEnabled={false}
						nextButton={'cek'}
						minDate={new Date()}
						dayContentRenderer={costumDay}
					/>
				</div>
			</div>
			<div className="ordered">
				<div className="head">
					<div className="tittle">Ordered</div>
					<span>10</span>
				</div>
				<div className="items">
					<div className="item">
						<Button className="btn" type="button">
							<img src="/andy/andy.jpg" alt="" />
							<span className="name">Dani Setiawa</span>
						</Button>
						<span className="date">11 oct</span>
					</div>
					<div className="item">
						<Button className="btn" type="button">
							<img src="/andy/andy.jpg" alt="" />
							<span className="name">Dani Setiawa</span>
						</Button>
						<span className="date">11 oct</span>
					</div>
					<div className="item">
						<Button className="btn" type="button">
							<img src="/andy/andy.jpg" alt="" />
							<span className="name">Dani Setiawa</span>
						</Button>
						<span className="date">11 oct</span>
					</div>
				</div>
				<Button type="button" className="btn-see-all" textGray children={'see all'} />
			</div>
		</div>
	);
};

export default Availability;
