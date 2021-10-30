
import './Comments.css';

import { useHistory } from "react-router-dom";
import { useState } from 'react';

function Comments() {

    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        console.log('CLICK next in the feeling form');
        event.preventDefault();
        setComment('');
    }   

    return(
        <form onSubmit={handleSubmit}>
            <h3>Any comment you want to leave?</h3>
            <input
                type="text"
                placeholder="Understanding?"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
            />
            <button type="submit">NEXT</button>
        </form>
    )
};

export default Comments;