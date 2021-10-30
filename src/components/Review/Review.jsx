
import './Review.css';

import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function Review() {

    const feedbackData = useSelector(store => store.formReducer);

    // const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log('CLICK submit in the review page');
        axios({
            method: 'POST',
            url:    '/feedback',
            data:   feedbackData
        })
        .then(response => {
            console.log('POST /feedback response', response);
        })
        .catch(error => {
            console.log('POST /feedback ERROR', error);
        })

    }

    console.log('this is the feedbackData:', feedbackData);

    return(
        <div>
            <h3>Review Your Feedback</h3>
            <p>FEELING: {feedbackData.feeling}</p>
            <p>UNDERSTANDING: {feedbackData.understanding}</p>
            <p>SUPPORT: {feedbackData.support}</p>
            <p>COMMENTS: {feedbackData.comments}</p>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
};

export default Review;