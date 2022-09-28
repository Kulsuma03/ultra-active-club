import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setActivities(data)
        })
         
    },[])

 console.log(activities)
    return (
        <div className='main-container'>
            <div>
            <h2>Select today’s work </h2>
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity
                    key = {activity.id}
                    activity = {activity}
                    ></Activity>)
                }
            </div>
            </div>
            <div>
                cart
            </div>
        </div>
    );
};

export default Activities;