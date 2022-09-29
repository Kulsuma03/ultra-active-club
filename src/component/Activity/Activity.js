import React from 'react';
import './Activity.css'

const Activity = ({activity, addToCart}) => {
    const {id, time, age, data, name, picture} = activity
    // console.log(name)
    return (
        <div className='activity-container'>
           <img src={picture} alt="" />
           <div className="activity-item">
                <h4 className='card-title'> {name} </h4> 
                <p className='card-detail-p'>{data? data.slice(0, 150) + '...' : data}</p>
                <p>For Age : {age}</p>
                <p>Time required : {time}<small> hour</small></p>
           </div>
           <button onClick={() => addToCart(activity)} className='btn-add'>Add to list</button>
        </div>
    );
};

export default Activity;