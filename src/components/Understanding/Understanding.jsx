import './Understanding.css'

import { useHistory } from "react-router-dom";
import { useState } from 'react';

function Understanding() {

    const [understanding, setUnderstanding] = useState('');


    const handleSubmit = (event) => {
        console.log('CLICK next in the feeling form');
        event.preventDefault();
        setUnderstanding('');
    }


    return(
        <form onSubmit={handleSubmit}>
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