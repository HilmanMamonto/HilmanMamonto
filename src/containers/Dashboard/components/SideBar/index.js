import Button from 'components/Button';
import React, { useState } from 'react';
import './styles.scss';

const SideBar = () => {
	const [ packagesIsShowed, setPackagesIsShowed ] = useState(true);
	const [ orderedIsShowed, setOrderedIsShowed ] = useState(false);
	const [ messagesIsShowed, setMessagesIsShowed ] = useState(false);

	const handleClick = (param) => {};

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
							<span>Witdraw</span>
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
					<Button
						type="button"
						className={packagesIsShowed ? 'active' : ''}
						children={<img src="arrow-right.svg" alt="" />}
						onClick={() => setPackagesIsShowed(!packagesIsShowed)}
					/>
				</label>
				<div className={packagesIsShowed ? 'items active' : 'items'}>
					<Button textGray type="button" className="active" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
					<Button textGray type="button" children={'Fushimi Inari Taisha'} />
				</div>
			</div>
			<div className="ordered">
				<label className="tittle">
					<span>ORDERED</span>
					<Button
						type="button"
						className={orderedIsShowed ? 'active' : ''}
						children={<img src="arrow-right.svg" alt="" />}
						onClick={() => setOrderedIsShowed(!orderedIsShowed)}
					/>
				</label>
				<div className={orderedIsShowed ? 'items active' : 'items'}>
					<Button textGray type="button">
						<span className="item-tittle">Fushimi Inari Taisha</span>
						<span className="date">11 oct</span>
					</Button>
					<Button textGray type="button">
						<span>Fushimi Inari Taisha</span>
						<span className="date">11 oct</span>
					</Button>
					<Button textGray type="button">
						<span>Fushimi Inari Taisha</span>
						<span className="date">11 oct</span>
					</Button>
					<Button textGray type="button">
						<span>Fushimi Inari Taisha</span>
						<span className="date">11 oct</span>
					</Button>
					<Button textGray type="button">
						<span>Fushimi Inari Taisha</span>
						<span className="date">11 oct</span>
					</Button>
				</div>
			</div>
			<div className="messages">
				<label className="tittle">
					<span>MESSAGES</span>
					<Button
						type="button"
						className={messagesIsShowed ? 'active' : ''}
						children={<img src="arrow-right.svg" alt="" />}
						onClick={() => setMessagesIsShowed(!messagesIsShowed)}
					/>
				</label>
				<div className={messagesIsShowed ? 'items active' : 'items'}>
					<Button textGray type="button">
						<div>
							<img src="" />
							<span>Dani Setiawan</span>
						</div>
						<span className="count">6</span>
					</Button>
					<Button textGray type="button">
						<div>
							<img src="" />
							<span>Dani Setiawan</span>
						</div>
						<span className="count">6</span>
					</Button>
					<Button textGray type="button">
						<div>
							<img src="" />
							<span>Dani Setiawan</span>
						</div>
						<span className="count">6</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
