import React, { useState, useRef, useEffect } from 'react';
import HeaderBottom from './components/HeaderBottom';
import HeaderCategories from './components/Categories';
import './styles.scss';
import NavLeft from './components/Nav/Left';
import NavRight from './components/Nav/Right';
import NavMid from './components/Nav/Mid';
import PropTypes from 'prop-types';
import BackgroundTransparent from 'components/BackgroundTransparent';

const Header = (props) => {
	const [ isShowed, setIsShowed ] = useState(false);
	const [ isActive, setIsActive ] = useState(true);
	const [ catShadow, setCatShadow ] = useState(false);

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		window.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('click', handleClickOutside);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const handleScroll = () => {
		const scrollY = window.pageYOffset;
		setCatShadow(false);

		if (props.type === 'selected product') {
			if (scrollY === 0) {
				setIsActive(true);
			}
			if (isActive && scrollY > 1 && scrollY < 200) {
				setIsActive(true);
			}
			if (scrollY >= 500) {
				setIsActive(false);
			}
		}
		if (props.type === 'home') {
			if (scrollY > 0) {
				setCatShadow(true);
			}
		}
	};

	const refHeader = useRef(null);
	const refInput = useRef(null);
	const handleClickOutside = (e) => {
		if (refHeader && !refHeader.current.contains(e.target) && !refInput.current.contains(e.target)) {
			setIsShowed(false);
		}
	};

	return (
		<div id="header">
			<header className={isActive ? 'active' : ''}>
				<nav>
					<NavLeft />
					<NavMid ref={refHeader} onClick={() => setIsShowed(!isShowed)} />
					<NavRight />
				</nav>
				<HeaderBottom ref={refInput} isActive={isShowed} />
			</header>
			{props.hasCategories && <HeaderCategories hasShadow={catShadow} />}
			{isShowed && <BackgroundTransparent />}
		</div>
	);
};

Header.propTypes = {
	hasCategories: PropTypes.bool,
	isActive: PropTypes.bool
};

export default Header;
