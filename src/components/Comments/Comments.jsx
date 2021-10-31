
import './Comments.css';

import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MUI imports;
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        console.log('CLICK next in the comment form');
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment
        })
        setComment('');

        history.push('/review')
    }

    return (
        <form className="form-comments" onSubmit={(event) => handleSubmit(event)}>
            <h3>Any comment you want to leave?</h3>
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                type="text"
                placeholder="Any comments?"
                onChange={(event) => setComment(event.target.value)}
                required
            />
            <Button
                variant="outlined"
                type="submit"
            >NEXT</Button>

        </form>
    )
};

export default Comments;