import React from 'react';
import SearchLocationManual from './Manual';
import SearchLocationRecomended from './Recomended';
import PropTypes from 'prop-types';

const SearchLocation = (props) => {
	const isActive = props.isActive ? 'active' : 'hide';

	if (props.type === 'recomended') {
		return <SearchLocationRecomended className={props.className} onClick={props.onClick} />;
	}
	if (props.type === 'manual') {
		return <SearchLocationManual data={props.data} className={props.className} />;
	}
};

SearchLocation.propType = {
	type: PropTypes.string,
	className: PropTypes.string,
	isActive: PropTypes.bool
};

export default SearchLocation;
