import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const topSizes = {
	xsmall: 'mt-xs ',
	small: 'mt-s ',
	medium: 'mt-m ',
	large: 'mt-l ',
	xlarge: 'mt-xl ',
	auto: 'mt-auto',
	undefined: ''
};

const bottomSizes = {
	xsmall: 'mb-xs ',
	small: 'mb-s ',
	medium: 'mb-m ',
	large: 'mb-l ',
	xlarge: 'mb-xl ',
	auto: 'mb-auto',
	undefined: ''
};

const leftSizes = {
	xsmall: 'ml-xs ',
	small: 'ml-s ',
	medium: 'ml-m ',
	large: 'ml-l ',
	xlarge: 'ml-xl ',
	auto: 'ml-auto',
	undefined: ''
};

const rightSizes = {
	xsmall: 'mr-xs ',
	small: 'mr-s ',
	medium: 'mr-m ',
	large: 'mr-l ',
	xlarge: 'mr-xl ',
	auto: 'mr-auto',
	undefined: ''
};

const justifyContents = {
	center: 'jc-center ',
	'space-betwen': 'jc-space-betwen ',
	'flex-start': 'jc-flex-start ',
	'flex-end': 'jc-flex-end ',
	undefined: ''
};

const variants = {
	transparent: 'c-bg-transparent ',
	'black-transparent': 'c-bg-black-transparent ',
	undefined: ''
};

const aligns = {
	center: 'ai-center ',
	'space-betwen': 'ai-space-betwen ',
	'flex-start': 'ai-flex-start ',
	'flex-end': 'ai-flex-end ',
	undefined: ''
};

const directions = {
	row: 'flex-direction-row ',
	column: 'flex-direction-column ',
	undefined: ''
};

const overFlows = {
	'y-scroll': 'y-scroll ',
	'x-scroll': 'x-scroll ',
	undefined: ''
};

const Container = ({
	children,
	top,
	bottom,
	left,
	right,
	justifyContent,
	mxAuto,
	myAuto,
	flex,
	direction,
	alignItems,
	variant,
	absolute,
	height,
	width,
	overFlow,
	as,
	z,
	maxWidth,
	padding,
	fullWidth,
	borderRadius
}) => {
	const classTop = topSizes[top];
	const classBottom = bottomSizes[bottom];
	const classLeft = leftSizes[left];
	const classRight = rightSizes[right];
	const classJc = justifyContents[justifyContent];
	const mxMyAuto = mxAuto ? 'mx-auto ' : myAuto ? 'my-auto ' : '';
	const classFlex = flex ? 'd-flex ' : '';
	const classAbsoulute = absolute ? 'p-absolute ' : '';
	const classAligns = aligns[alignItems];
	const classFDirection = directions[direction];
	const class100Vh = height === '100vh' ? 'height-100vh ' : '';
	const class100Vw = width === '100vw' ? 'height-100vw ' : '';
	const classVariant = variants[variant];
	const classOverFlow = overFlows[overFlow];

	const className =
		'container ' +
		classFlex +
		classAbsoulute +
		classTop +
		classBottom +
		classLeft +
		classRight +
		classJc +
		mxMyAuto +
		classAligns +
		class100Vh +
		class100Vw +
		classVariant +
		classOverFlow +
		classFDirection;

	const styles = {
		maxWidth: maxWidth,
		padding: padding,
		zIndex: z,
		width: fullWidth ? '100%' : null,
		borderRadius: borderRadius,
		direction: 'row'
	};

	const Result = () => {
		if (as === 'div') {
			return (
				<div className={className} style={styles}>
					{children}
				</div>
			);
		}
		if (as === 'span') {
			return (
				<span className={className} style={styles}>
					{children}
				</span>
			);
		}
	};

	return <Result />;
};

const Item = ({ children }) => {
	return <div>{children}</div>;
};

Container.defaultProps = {
	flex: false,
	direction: 'row',
	as: 'div'
};

Container.propTypes = {
	top: PropTypes.string,
	bottom: PropTypes.string,
	left: PropTypes.string,
	right: PropTypes.string,
	as: PropTypes.string,
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
	fullWidth: PropTypes.bool,
	variant: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
	overFlow: PropTypes.string,
	borderRadius: PropTypes.number
};

Container.Item = Item;

export default Container;
