import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'Layout/Grid';
import Container from 'Layout/Container';
import './styles.scss';
import Icons from 'components/Icons';

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
				const activate =
					item.status === 'active' ? 'active' : item.status === 'checkmark' ? 'checkmark' : 'disabled';
				const activeAndDisabeled = (
					<div className={'st-item ' + activate}>
						<span className="st-atribute">{i + 1}</span>
						<span className="st-tittle">{item.tittle}</span>
					</div>
				);
				const checkmark = (
					<div className={'st-item ' + activate}>
						<span className="st-atribute">
							<Icons className="st-icon-chekmark" variant="checkmark-single-green" />
						</span>
						<span className="st-tittle">{item.tittle}</span>
					</div>
				);

				const result =
					item.status === 'active' || item.status === 'disabled'
						? activeAndDisabeled
						: item.status === 'checkmark' ? checkmark : '';
				return (
					<div key={'step-item' + i} className="st-items">
						{result}
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
