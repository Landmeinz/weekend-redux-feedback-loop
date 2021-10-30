
import './Comments.css';

import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comments() {

    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        console.log('CLICK next in the feeling form');
        event.preventDefault();
        dispatch({
            type:   'ADD_COMMENT',
            payload: comment
        })
        setComment('');
    }   

    return(
        <form onSubmit={(event) => handleSubmit(event)}>
            <h3>Any comment you want to leave?</h3>
            <input
                type="text"
                placeholder="Any comments?"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
            />
            <button type="submit">NEXT</button>
        </form>
    )
};

export default Comments;