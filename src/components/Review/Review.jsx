
import './Review.css';

import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

// MUI imports;
import Button from '@mui/material/Button';

function Review() {

    const dispatch = useDispatch();
    const history = useHistory();

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


    const handleStartOver = () => {
        history.push('/');
    }


    const [submitState, setSubmitState] = useState(false)

    
    const displaySuccess = (
        <div className="display-success">
    
            <h3>Feedback Submitted Successfully!</h3>

            <Button 
                onClick={handleStartOver}
                variant="outlined"
                type="submit"
            >NEW FEEDBACK FORM</Button>
        </div>
    )


    const displayReview = (
        <div className="display-review">

            <h3>Review Your Feedback</h3>

            <div className="review-info">

                <div className="info-left">
                    <p>FEELING: </p>
                    <p>UNDERSTANDING: </p>
                    <p>SUPPORT: </p>
                    <p>COMMENTS: </p>
                </div>

                <div className="info-right">
                    <p>{feedbackData.feeling}</p>
                    <p>{feedbackData.understanding}</p>
                    <p>{feedbackData.support}</p>
                    <p>{feedbackData.comments}</p>
                </div>

            </div>
            <Button 
                onClick={handleSubmitFeedback}
                variant="outlined"
                type="submit"
            >SUBMIT</Button>

        </div>
    )
    

    return (
        <div className="review-container">
            {submitState ? displaySuccess : displayReview}
        </div>
    )
};


export default Review;