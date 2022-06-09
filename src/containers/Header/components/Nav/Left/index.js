import Button from 'components/Button';
import React from 'react';
import './styles.scss';

const NavLeft = () => {
	return (
		<div id="nav-left">
			<Button type="link" href="/" textPrimary>
				<label>
					Rotate<span />
				</label>
			</Button>
		</div>
	);
};

export default NavLeft;
