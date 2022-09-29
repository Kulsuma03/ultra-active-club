import React, { useEffect, useState } from 'react';

import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';

import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] =useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setActivities(data)
        })
         
    },[])

    const addToCart = (id) =>{
        console.log(id)
        const newCart = [...cart, id]
        setCart(newCart)

    }

//  console.log(activities)
    return (
        <div className='main-container'>
            <div>
            
            <h2>Select today’s work </h2>
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity
                    key = {activity.id}
                    activity = {activity}
                    addToCart = {addToCart}
                    ></Activity>)
                }
            </div>
            </div>
            <div className='main-cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Activities;