import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Grid = ({ children, ...props }) => {
	const length = children.length;
	const cGap = props.colGap;
	const rGap = props.rowGap;
	const styles = {
		gridTemplateColumns: 'repeat(' + length + ', ' + props.itemWidth + '  )',
		columnGap: cGap,
		rowGap: rGap
	};

	return (
		<div className="grid" style={styles}>
			{children}
		</div>
	);
};

const Item = ({ children }) => {
	return <div>{children}</div>;
};

Grid.defaultProps = {
	colGap: 0,
	rowGap: 0,
	itemWidth: '1fr'
};

Grid.propTypes = {
	colGap: PropTypes.number,
	rowGap: PropTypes.number,
	itemWidth: PropTypes.string
};

Grid.Item = Item;

export default Grid;
