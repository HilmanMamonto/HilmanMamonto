import Button from 'components/NewButton/Button';
import DashboardAvatar from 'components/DataDisplay/DashboradAvatar/DashboardAvatar';
import WalletInfo from 'components/DataDisplay/WalletInfo/WalletInfo';
import Container from 'Layout/Container';
import React from 'react';

import './styles.scss';
import SideBarList from 'components/DataDisplay/SideBarList/SideBarList';
import Icons from 'components/Icons';
import NavSideBar from 'components/Navigations/NavSideBar/NavSideBar';
import Line from 'components/Line';

const packagesItems = [
	{ id: 'abcdabcd001', name: 'Fushimi Inari Taisha' },
	{ id: 'abcdabcd002', name: 'Sibuya' },
	{ id: 'abcdabcd003', name: 'Tokyo' },
	{ id: 'abcdabcd004', name: 'Kyoto' }
];
const orderedItems = [ { name: 'Fushimi Inari Taisha' }, { name: 'Sibuya' }, { name: 'Tokyo' }, { name: 'Kyoto' } ];
const massagesItems = [ { name: 'Dani Setiawan' }, { name: 'Veronika Mark' }, { name: 'Joe Winata' } ];

const topNav = (
	<Container left="medium" right="medium" bottom="medium">
		<NavSideBar />
		<Line />
	</Container>
);

const avatar = (
	<Container left="medium" right="medium" bottom="medium">
		<DashboardAvatar name="Andy Mahendra" imgUrl="/andy/andy.jpg" tittle="Tour Guide" />
	</Container>
);

const wallet = (
	<Container flex justifyContent="center" bottom="medium">
		<WalletInfo label={10} />
	</Container>
);

const packages = (
	<Container left="medium" right="medium">
		<SideBarList data={packagesItems} label="Packages" />
	</Container>
);

const ordered = (
	<Container top="xsmall" left="medium" right="medium">
		<SideBarList data={orderedItems} label="Ordered" />
	</Container>
);

const SideBar = () => {
	return (
		<div id="side-bar">
			{avatar}
			{wallet}
			{topNav}
			{packages}
			{ordered}
		</div>
	);
};

export default SideBar;
