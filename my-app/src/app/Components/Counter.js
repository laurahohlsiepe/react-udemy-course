"use client";

import { React } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../Counter.css';

function Counter() {

    let count = 0;
   const [currentState, updatedState] = useState(count);

    useEffect(() => {
        if (currentState === 5) {
            window.alert('I am clicked!');
        }
    }, [currentState]); 
 

    const handleClick = () => {
        updatedState(currentState + 1);
    };

  return (
        <> 
        <div className="counter_parent">
            <div className="main-div">
                <h3>Counter</h3>
                <button onClick={handleClick}> {currentState} </button>   
            </div>
        </div>
        </>
  )
}

export default Counter