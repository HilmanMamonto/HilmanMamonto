import React from 'react';
import PropTypes from 'prop-types';
import H from 'components/H';
import Button from 'components/NewButton/Button';
import Icons from 'components/Icons';
import './styles.scss';
import { useLocation, useMatch } from 'react-router-dom';

const DasboardHead = ({ name }) => {
	const matchDashboard = useMatch('/dashboard/*').pathnameBase;
	const matchPackages = useMatch('/dashboard/packages/*');
	const packageName = useLocation().pathname.split('/dashboard/packages/').join(' ');

	const label = matchPackages ? 'Package, ' + packageName : '';
	console.log(matchDashboard);
	return (
		<header className="dashboard-head">
			<div className="dh-left">
				<H as="h2" weight="600" childrend={label} />
				<span className="dh-name">Welcome Back, {name}</span>
			</div>
			<div className="dh-right">
				<Button
					leftIcon={<Icons variant="plus-background-rounded" size="xlarge" />}
					label="Add Travel Pacakge"
					color="secondary"
					shadow="large"
					variant="contained"
					size="small"
				/>
			</div>
		</header>
	);
};

DasboardHead.propTypes = {};

export default DasboardHead;
