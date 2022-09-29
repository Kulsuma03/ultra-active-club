import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons'
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
                <div className='header'>
                <FontAwesomeIcon className='icon' icon={faHouseLaptop} />
                <h1 className='heading'>Calculate The Activity</h1>
                </div>
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