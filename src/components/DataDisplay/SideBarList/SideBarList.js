import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { Link, useMatch, useLocation } from 'react-router-dom';
import Icons from 'components/Icons';
import { useState } from 'react';

const SideBarList = ({ label, data }) => {
	const path = label.toLowerCase();
	const match = useMatch('dashboard/' + path + '/*');
	const location = useLocation();
	const [ isShow, setShow ] = useState(match ? true : false);

	const items = data.map((item, i) => {
		const pathName = path + '/' + item.name.split(' ').join('-').toLowerCase();
		const activate = location.pathname.match(pathName) ? 'active ' : '';
		return (
			<Link className={activate} key={'list ' + label + ' ' + i} to={pathName}>
				<span className="name">{item.name}</span>
			</Link>
		);
	});

	const showClass = isShow ? 'active' : '';

	return (
		<div className="side-bar-list">
			<div className="sb-list-head">
				<div className="sb-list-label">
					<Icons variant="bag" size="large" />
					{label}
				</div>
				<Icons
					variant="arrow-up"
					className={'sb-list-icon-arrow ' + showClass}
					size="small"
					onClick={() => setShow(!isShow)}
				/>
			</div>
			<div className={'sb-list-items ' + showClass}>{items}</div>
		</div>
	);
};

SideBarList.propTypes = {
	label: PropTypes.string,
	data: PropTypes.array
};

export default SideBarList;
