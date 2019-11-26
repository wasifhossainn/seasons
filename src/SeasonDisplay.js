import React from 'react';
import './SeasonDisplay.css';

//Configuration Object created which has 2 key values pairs inside
const seasonConfig = {
	//Summer object
	summer: {
		text: "Let's hit the beach",
		iconName: 'sun'
	},

	//Winter object
	winter: {
		text: 'Brrr its cold',
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth);
	const { text, iconName } = seasonConfig[season];
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
