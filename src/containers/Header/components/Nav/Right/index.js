import React from 'react';
import './styles.scss';
import Button from 'components/Button';

const NavRight = (props) => {
	return (
		<div id="nav-right">
			<Button
				type="link"
				href={'/'}
				children={'Become a toure guide'}
				textPrimary
				style={{ marginRight: '24px' }}
			/>
			<div>
				<span />
				<span />
				<span />
			</div>
			<img alt="" />
		</div>
	);
};

NavRight.propTypes = {};

export default NavRight;
