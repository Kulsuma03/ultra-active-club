import React from 'react';
import './Break.css'

const Break = ({time, addToBreak}) => {
    return (
        <div >
            <button onClick={() =>addToBreak(time)} className='break-time'>{time}</button>
        </div>
    );
};

export default Break;