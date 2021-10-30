
import './Feeling.css'

import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Feeling(){

    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');

    
    const handleSubmit = (event) => {
        console.log('CLICK next in the feeling form');
        event.preventDefault();
        dispatch({
            type:   'ADD_FEELING',
            payload: feeling
        })
        setFeeling('');
    }


    return(
        <form onSubmit={(event) => handleSubmit(event)}>
            <h3>How are you feeling today?</h3>
            <input 
                type="number"  
                placeholder="Feeling?"
                value={feeling}
                onChange={(event) => setFeeling(event.target.value) }
                min="1"
                max="5"
                required
            />
            <button type="submit">NEXT</button>
        </form>
    )
};

export default Feeling;





// radio? 

{/* <fieldset onSubmit={handleSubmit}>
            <legend>HOW ARE YOU FEELING TODAY?</legend>
            <label htmlFor=""></label>
            1<input type="radio" name="rating" value="1" />
            2<input type="radio" name="rating" value="2" />
            3<input type="radio" name="rating" value="3" />
            4<input type="radio" name="rating" value="4" />
            5<input type="radio" name="rating" value="5" />
            <button type="submit">NEXT</button>
        </fieldset> */}