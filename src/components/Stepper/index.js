import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'Layout/Grid';
import Container from 'Layout/Container';
import './styles.scss';

const sizes = {
	small: 'st-small ',
	medium: 'st-medium ',
	large: 'st-large ',
	undefined: ''
};

const Stepper = ({ size, data }) => {
	const className = 'stepper ' + sizes[size];

	return (
		<div className={className}>
			{data.map((item, i) => {
				const line = i != data.length - 1 ? <div className="st-line" /> : null;
				const activate = item.status === 'active' || item.status === 'checkmark' ? 'active' : 'disabeled';
				const active = (<span className="st-number">{i + 1}</span><span className="st-tittle">{item.tittle}</span>)
				const content = 
				return (
					<div key={'step-item' + i} className="st-items">
						<div className={'st-item ' + activate}>
							<span className="st-number">{i + 1}</span>
							<span className="st-tittle">{item.tittle}</span>
						</div>
						{line}
					</div>
				);
			})}
		</div>
	);
};

Stepper.propTypes = {
	data: PropTypes.array.isRequired,
	size: PropTypes.string
};

export default Stepper;
