
import './Review.css';

import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Review() {

    const dispatch = useDispatch();

    const feedbackData = useSelector(store => store.formReducer);

    const handleSubmitFeedback = () => {
        console.log('CLICK submit in the review page');
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackData
        })
            .then(response => {
                console.log('POST /feedback response', response);
            })
            .catch(error => {
                console.log('POST /feedback ERROR', error);
            })

        dispatch({ type: 'CLEAR_ALL' });
        
        setSubmitState(true);
    }



    const [submitState, setSubmitState] = useState(false)

    
    const displaySuccess = (
        <div>
            <h3>FEEDBACK POST SUCCESS!</h3>
            <button>START NEW FEEDBACK FORM</button>
        </div>
    )


    const displayReview = (
        <div>
            <h3>Review Your Feedback</h3>
            <p>FEELING: {feedbackData.feeling}</p>
            <p>UNDERSTANDING: {feedbackData.understanding}</p>
            <p>SUPPORT: {feedbackData.support}</p>
            <p>COMMENTS: {feedbackData.comments}</p>
        <button onClick={handleSubmitFeedback}>SUBMIT</button>
    </div>
    )
    

    console.log('this is the feedbackData:', feedbackData);

    return (
        <div>
            {submitState ? displaySuccess : displayReview}
        </div>
    )
};

export default Review;