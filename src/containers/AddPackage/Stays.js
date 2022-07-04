import Stay from 'components/DataDisplay/Stay/Stay';
import React from 'react';
import './styles.scss';
import 'animate.css';
import data from 'json/staycations';

const Stays = () => {
	return (
		<div className="ap-stays">
			{data.map((item, i) => (
				<div
					key={item.id}
					className="animate__animated animate__fadeInUp"
					style={{ animationDelay: 0.3 * i + 's' }}
				>
					<li>
						<Stay tittle={item.tittle} location={item.location} budget={item.budget} rate={item.rate} />
					</li>
				</div>
			))}
		</div>
	);
};

export default Stays;
