import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import H from 'components/H';

const Stay = ({ tittle, location, budget, rate, reviews, src }) => {
	return (
		<div className="stay">
			<div className="st-items">
				<img className="stay-img" src={src} alt={tittle} />
				<div>
					<H as="h3" weight="500" className="st-tittle" childrend={tittle} />
					<span className="st-location">{location}</span>
					<label className="st-budget">${budget} / night</label>

					<div className="st-foot">
						<span>{rate}</span>
						<span>Reviews({reviews})</span>
					</div>
				</div>
			</div>
			<div>
				<input type="checkbox" />
			</div>
		</div>
	);
};

Stay.propTypes = {
	tittle: PropTypes.string,
	location: PropTypes.string,
	src: PropTypes.string,
	budget: PropTypes.number,
	reviews: PropTypes.number
};

export default Stay;
