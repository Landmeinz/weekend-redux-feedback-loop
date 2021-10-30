
import './Support.css'

import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support() {

    const [support, setSupport] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        console.log('CLICK next in the support form');
        event.preventDefault();
        dispatch({
            type:   'ADD_SUPPORT',
            payload: support
        })
        setSupport('');
    }


    return (
        <form onSubmit={(event) => handleSubmit(event)}>
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