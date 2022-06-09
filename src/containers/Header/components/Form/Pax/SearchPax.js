import React from 'react';
import './SearchPax.scss';

const SearchPax = (props) => {
	return (
		<div id="search-pax" className={props.className}>
			<div className="wrap">
				<div className="details">
					<label>Adult</label>
					<span>Ages 13 or above</span>
				</div>
				<div className="count">
					<div className="btn-min" onClick={props.onClick}>
						-
					</div>
					<span>{props.value}</span>
					<div className="btn-plus" onClick={props.onClick}>
						+
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchPax;
