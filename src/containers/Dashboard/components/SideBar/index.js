import Button from 'components/Button';
import React from 'react';
import './styles.scss';

const SideBar = () => {
	return (
		<div id="side-bar">
			<div className="profile">
				<img src="" alt="" />
				<div className="tittle">
					<label>Moh Sidik</label>
					<span>Tour Guide</span>
				</div>
			</div>
			<div className="wallet-info">
				<div>
					<label>Total Earn</label>
					<span>$230</span>
				</div>
				<Button
					type="button"
					className="btn-witdraw"
					children={
						<div>
							<span>Witraw</span>
							<img src="" />
						</div>
					}
				/>
			</div>
			<div className="travel-active">
				<label className="tittle">TRAVEL ACTIVE</label>
				<div className="details">
					<span className="dot" />
					<div className="sub-tittle">
						<label>Fushimi Inari Taisha</label>
						<span>8 Mei 2022</span>
					</div>
				</div>
			</div>
			<div className="packages">
				<label className="tittle">
					<span>PACKAGES</span>
					<Button type="button" children={'>'} />
				</label>
				<div className="items">
					<Button textGray type="button" className="active" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
				</div>
			</div>
			<div className="packages">
				<label className="tittle">
					<span>PACKAGES</span>
					<Button type="button" children={'>'} />
				</label>
				<div className="items">
					<Button textGray type="button" className="active" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
				</div>
			</div>
		</div>
	);
};

export default SideBar;
