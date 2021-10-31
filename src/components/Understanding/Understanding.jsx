import './Understanding.css'

import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MUI imports;
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';


function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState('');


    const handleSubmit = (event) => {
        console.log('CLICK next in the understanding form');
        event.preventDefault();
        if (understanding > 0) {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: understanding
            })
        } else {
            return alert('please make a selection')
        }

        setUnderstanding('');

        history.push('/support');
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
        <form className="form-understanding" onSubmit={(event) => handleSubmit(event)}>
            <h3>How well are you understanding the content?</h3>

            <Slider
                step={1}
                marks={marks}
                min={1}
                max={5}
                onChange={(event) => setUnderstanding(event.target.value)}
                required
            />
            <Button
                variant="outlined"
                type="submit"
            >NEXT</Button>
        </form>
    )
}

export default Understanding;