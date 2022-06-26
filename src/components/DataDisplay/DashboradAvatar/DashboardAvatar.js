import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';
import Icons from 'components/Icons';
import './styles.scss';

const DashboardAvatar = ({ name, tittle, imgUrl }) => {
	return (
		<div className="dashboard-avatar">
			<div className="left">
				<Avatar src={imgUrl} size="large" />
				<div className="info">
					<label className="da-name">{name}</label>
					<span className="da-tittle">{tittle}</span>
				</div>
			</div>
			<Icons onClick={() => 'test'} variant="checkmark" />
		</div>
	);
};

DashboardAvatar.propTypes = {
	name: PropTypes.string,
	tittle: PropTypes.string,
	imgUrl: PropTypes.string
};

export default DashboardAvatar;
