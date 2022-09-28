import React from 'react';
import './Activity.css'

const Activity = ({activity}) => {
    const {id, time, age, data, name, picture} = activity
    console.log(name)
    return (
        <div className='activity-container'>
           <img src={picture} alt="" />
           <div className="activity-item">
                <h4 className='card-title'> {name} </h4> 
                <p>{data? data.slice(0, 200) + '...' : data}</p>
                <p>For Age : {age}</p>
                <p>Time required : {time}<small> hour</small></p>
           </div>
        </div>
    );
};

export default Activity;