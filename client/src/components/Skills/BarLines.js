import React from 'react';
import { COLORS } from '../../Constant';

const BarLines = ({ data }) => {
	data.sort((a, b) => b.val - a.val);

	const elem = data.map((item, idx) => {
		let width = Number(item.val).toFixed(0);
		return (
			<div key={idx} className="bar-row">
				<div className={'bar-lines bar-' + idx + ' ' + COLORS[idx]} style={{ width: `${width}%` }}>
					<div className="bar-info">
						<div className="key">{item.type}</div>
						<div className="val">{item.val} %</div>
					</div>
				</div>
			</div>
		);
	});
	return <div className="bar-container">{elem}</div>;
};

export default BarLines;
