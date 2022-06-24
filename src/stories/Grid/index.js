import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Grid = ({ children, ...props }) => {
	const length = children.length;
	const cGap = props.colGap;
	const rGap = props.rowGap;

	const styles = {
		gridTemplateRows: props.direction === 'row' ? 'repeat(' + length + ', ' + props.itemWidth + '  )' : '',
		gridTemplateColumns: props.direction === 'col' ? 'repeat(' + length + ', ' + props.itemWidth + '  )' : '',
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
	direction: PropTypes.string
};

export default Grid;
