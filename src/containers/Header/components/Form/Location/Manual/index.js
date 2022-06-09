import React from 'react';
import './styles.scss';
import _countriesData from 'json/countries.json';

const SearchLocationManual = (props) => {
	if (props.data.length > 0) {
		return (
			<div id="search-location-manual" className={props.className}>
				<div className="items">
					{props.data.map((val, i) => {
						return (
							<div className="item" key={'location' + i}>
								<figure>
									<img />
								</figure>
								<div className="details">
									<label>{val.capital}</label>
									<span>{val.name}</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};

export default SearchLocationManual;
