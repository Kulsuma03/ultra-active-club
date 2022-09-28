import React, { useEffect, useState } from 'react';

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
        <div>
            <div>
            <h2>Select today’s work </h2>
            <div>
                {
                    activities.map(activity => <p>{activity.id}</p>)
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