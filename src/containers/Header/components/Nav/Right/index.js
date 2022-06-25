import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import Button from 'components/Button';
import Avatar from 'components/Avatar/Avatar';

const NavRight = (props) => {
	const [ burgerIsActive, setBurgerIsActive ] = useState();
	const burgerRef = useRef(null);
	const burgerItemsRef = useRef(null);

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});

	const handleClickOutside = (e) => {
		if (burgerRef && !burgerRef.current.contains(e.target) && !burgerItemsRef.current.contains(e.target)) {
			setBurgerIsActive(false);
		}
	};

	return (
		<div id="nav-right">
			<Button
				type="link"
				href="/"
				children={'Become a toure guide'}
				textPrimary
				style={{ marginRight: '24px' }}
			/>
			<div className="burger-wraper">
				<Button type="button" className="btn-burger" onClick={() => setBurgerIsActive(!burgerIsActive)}>
					<div ref={burgerRef}>
						<span className="_burger" />
						<span className="_burger" />
						<span className="_burger" />
					</div>
				</Button>
				<div ref={burgerItemsRef} className={burgerIsActive ? 'burger-items active' : 'burger-items'}>
					<div className="main-items">
						<div className="item">
							<Button type="link" href="/dashboard" children={'Dashboard'} />
						</div>
						<div className="item">
							<Button type="link" href="/" children={'Notification'} />
						</div>
						<div className="item">
							<Button type="link" href="/" children={'Message'} />
						</div>
						<div className="item">
							<Button type="link" href="/" children={'Whislist'} />
						</div>
					</div>
					<div className="sub-items">
						<Button type="link" href="/" children={'Log out'} className="item" />
					</div>
				</div>
			</div>
			<Avatar size="large" as="link" href="/dashboard" src="/andy/andy.jpg" />
		</div>
	);
};

NavRight.propTypes = {};

export default NavRight;
