
import './Support.css'

import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MUI imports;
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState('');

    const handleSubmit = (event) => {
        console.log('CLICK next in the support form');
        event.preventDefault();
        if (support > 0) {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: support
            })
        } else {
            return alert('please make a selection')
        }

        // setSupport('');

        history.push('/comments')
    }


    const marks = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
    ];


    return (
        <form className="form-support" onSubmit={(event) => handleSubmit(event)}>
            <h3>How well are you being supported?</h3>

            <Slider
                step={1}
                marks={marks}
                min={1}
                max={5}
                onChange={(event) => setSupport(event.target.value)}
                required
            />
            <Button
                variant="outlined"
                type="submit"
            >BACK</Button>
            <Button
                variant="outlined"
                type="submit"
            >NEXT</Button>

        </form>
    )
}

export default Support;