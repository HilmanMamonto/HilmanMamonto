import React from 'react';
import './styles.scss';
import Button from 'components/Button';

const NavMid = (props, ref) => {
	return (
		<div id="nav-mid" className={props.className} ref={ref}>
			<Button
				type="button"
				className="btn-search"
				children={'Where are you going?'}
				textLightGray
				onClick={props.onClick}
			/>
			<span />
			<Button
				type="button"
				onClick={props.onClick}
				style={{
					width: '30px',
					height: '30px'
				}}
				children={<img src="search.svg" alt="" />}
			/>
		</div>
	);
};

export default React.forwardRef(NavMid);
