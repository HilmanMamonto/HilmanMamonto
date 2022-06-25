import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

const variants = {
	image: 'avatar-image ',
	text: 'avatar-text '
};

const shadows = {
	small: 'shadow-s ',
	medium: 'shadow-m ',
	large: 'shadow-l '
};

const sizes = {
	small: 'avatar-small ',
	medium: 'avatar-medium ',
	large: 'avatar-large '
};

const Avatar = ({ variant, text, href, onClick, size, shadow, color, disabeled, src, alt, as }) => {
	const styles = {
		backgroundColor: color ? color : 'gray'
	};
	const disability = disabeled ? 'disabeled ' : '';
	const className = 'avatar ' + variants[variant] + sizes[size] + shadows[shadow] + disability;

	const item = variant === 'image' ? <img src={src} alt={alt} /> : variant === 'text' ? text : '';

	const elements = {
		a: (
			<a onClick={onClick} style={styles} className={className} href={href}>
				{item}
			</a>
		),
		button: (
			<button className={className} style={styles} disabled={disabeled} onClick={onClick}>
				{item}
			</button>
		),
		link: (
			<Link className={className} style={styles} to={href}>
				{item}
			</Link>
		)
	};

	return elements[as];
};

Avatar.defaultProps = {
	variant: 'image',
	size: 'medium',
	as: 'button',
	alt: '',
	text: '',
	href: '/'
};

Avatar.propTypes = {
	label: PropTypes.string,
	variant: PropTypes.string,
	as: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.string,
	shadow: PropTypes.string
};

export default Avatar;
