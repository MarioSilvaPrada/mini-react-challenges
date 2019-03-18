import React from 'react';
import moment from 'moment';


const Time = () => {
    let time = moment().format('MMMM Do YYYY');
    return (
        <span className="time">{time}</span>
    )
}

export default Time;