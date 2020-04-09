import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
        }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = (season === 'winter' ? 'It is winter' : 'It is summer' );
    const icon = (season === 'winter' ? 'snowflake' : 'sun' );
    console.log(season)
    return <div>
<i className= {`massive ${icon} icon`}></i>
<h1>{text}</h1>
    </div>
}

export default SeasonDisplay;