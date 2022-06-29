import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Grid = ({ children, direction, colGap, rowGap, itemWidth, templateRows, templateColumns }) => {
	const length = children.length;
	const cGap = colGap;
	const rGap = rowGap;
	const tempRows = templateRows ? templateRows.join(' ') : 'repeat(' + length + ', ' + itemWidth + '  )';
	const tempCol = templateColumns ? templateColumns.join(' ') : 'repeat(' + length + ', ' + itemWidth + '  )';

	const styles = {
		gridTemplateRows: direction === 'row' ? tempRows : '',
		gridTemplateColumns: direction === 'col' ? tempCol : '',
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
Grid.Item = Item;
Grid.defaultProps = {
	colGap: 0,
	rowGap: 0,
	itemWidth: '1fr',
	direction: 'col'
};

Grid.propTypes = {
	colGap: PropTypes.number,
	rowGap: PropTypes.number,
	itemWidth: PropTypes.string,
	direction: PropTypes.string,
	templateColumns: PropTypes.array,
	templateRows: PropTypes.array
};

export default Grid;
