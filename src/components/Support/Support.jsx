
import './Support.css'

import { useHistory } from "react-router-dom";
import { useState } from 'react';

function Support() {

    const [support, setSupport] = useState('');

    const handleSubmit = (event) => {
        console.log('CLICK next in the support form');
        event.preventDefault();
        setSupport('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>How well are you being supported?</h3>
            <input
                type="number"
                placeholder="Understanding?"
                value={support}
                onChange={(event) => setSupport(event.target.value)}
                min="1"
                max="5"
                required
            />
            <button type="submit">NEXT</button>
        </form>
    )
}

export default Support;