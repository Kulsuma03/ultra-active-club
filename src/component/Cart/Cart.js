import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import Break from '../Break/Break';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import Swal from 'sweetalert2'


const Cart = ({cart}) => {
    // console.log(cart)
    const [breakTimeDetail, setBreakTimeDetail] = useState([]);
    const breakTime = ['10s', '20s', '30s', '40s', '50s'];

  
    const addToAlert = () =>{
        Swal.fire(
            'Congratulations',
            'You are done',
            'success'
          )
    }

    useEffect( () => {
        const data = getStoredCart();
        const id = data.id
        setBreakTimeDetail(id)
        // console.log(data)
        
    },[breakTime])

    let time = 0
    for(const work of cart){
        time = time + work.time
        
    };

    const addToBreak = (time) =>{
        localStorage.clear()
        let newBreakTime = [time]
        setBreakTimeDetail(newBreakTime);
        addToDb(time)

    }
    
    return (
        <div>
            <div className='info-container'>
                <img src="https://media.istockphoto.com/photos/studio-portrait-of-a-smiling-young-latin-woman-picture-id1357723739?s=612x612" alt="" />
                <div >
                    <p className='name'>Kulsuma Akter</p>
                    <div className='location'>
                    <FontAwesomeIcon className='icon-location' icon={faLocationPin} />
                    <p>Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='my-info'>
                    <div>
                        <h4>50<small>kg</small></h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4>5.2</h4>
                        <p>Height</p>
                    </div>
                    <div>
                        <h4>26</h4>
                        <p>Age</p>
                    </div>
                </div>
            <div>
                <h4 className='add-brk'>Add A Break</h4>
                <div className='time-btn'>
                    {breakTime.map(time => <Break key={time} addToBreak={addToBreak} time={time}></Break>)}
                </div>
            </div>
            <div>
                <h4 className='add-brk'>Working Details</h4>
                <div className="work-detail">
                    <p>Working time</p>
                    <p>{time}<span> hour</span></p>
                </div>
                <div className="work-detail">
                    <p>Break time</p>
                    <p>{breakTimeDetail}</p>
                </div>
            </div>
            <div>
                <button onClick={addToAlert} className='btn-completed'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;