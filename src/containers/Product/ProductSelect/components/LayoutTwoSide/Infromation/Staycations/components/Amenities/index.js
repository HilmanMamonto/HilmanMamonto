import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import H from 'components/H';

const Amenities = (props) => {
	return (
		<div id="staycation-aminities">
			<H type="2" childrend={'Amenities'} textBold isPrimary />
			<div className="items">
				<div className="item">
					<img />
					<label>1</label>
				</div>
				<div className="item">
					<img />
					<label>2</label>
				</div>
				<div className="item">
					<img />
					<label>3</label>
				</div>
				<div className="item">
					<img />
					<label>4</label>
				</div>
				<div className="item">
					<img />
					<label>5</label>
				</div>
				<div className="item">
					<img />
					<label>6</label>
				</div>
				<div className="item">
					<img />
					<label>7</label>
				</div>
				<div className="item">
					<img />
					<label>8</label>
				</div>
				<div className="item">
					<img />
					<label>9</label>
				</div>
			</div>
		</div>
	);
};

Amenities.propTypes = {};

export default Amenities;
