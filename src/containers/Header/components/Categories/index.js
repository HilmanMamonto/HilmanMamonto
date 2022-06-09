import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'components/Button';

const HeaderCategories = (props) => {
	const dataRef = useRef(null);
	const handleScroll = (param) => {
		if (param === 'next') dataRef.current.scrollLeft += 200;
		if (param === 'prev') dataRef.current.scrollLeft -= 200;
	};

	const arrClass = [ props.className ];
	if (props.hasShadow) arrClass.push('box-shadow');

	return (
		<div id="header-categories" className={arrClass.join(' ')}>
			<div className="button-wraper-left">
				<Button
					id="btn-categories-left"
					type={'button'}
					isBgWhite
					isRounded
					borderedLigthGray
					children={'<'}
					onClick={() => handleScroll('prev')}
				/>
			</div>
			<div className="button-wraper-right">
				<Button
					id="btn-categories-right"
					type="button"
					isBgWhite
					isRounded
					borderedUltraLightGray
					children={'>'}
					onClick={() => handleScroll('next')}
				/>
			</div>
			<div className="categories-items" ref={dataRef}>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="balloon.svg" alt="" />
					<label>ballon</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
				<div className="item">
					<img src="booating.svg" alt="" />
					<label>Booating</label>
				</div>
			</div>
		</div>
	);
};

HeaderCategories.propTypes = {
	isActive: PropTypes.bool
};

export default HeaderCategories;
