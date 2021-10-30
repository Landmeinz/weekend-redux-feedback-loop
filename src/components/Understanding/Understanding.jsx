import './Understanding.css'

import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState('');
    
    const handleSubmit = (event) => {
        console.log('CLICK next in the feeling form');
        event.preventDefault();
        dispatch({
            type:   'ADD_UNDERSTANDING',
            payload: understanding
        })
        setUnderstanding('');

        history.push('/support');
    }


    return(
        <form onSubmit={(event) => handleSubmit(event)}>
            <h3>How well are you understanding the content?</h3>
            <input 
                type="number"  
                placeholder="Understanding?"
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                min="1"
                max="5"
                required
            />
            <button type="submit">NEXT</button>
        </form>
    )
}

export default Understanding;