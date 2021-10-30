
import './Review.css';

import { useHistory } from "react-router-dom";

function Review() {

    const handleSubmit = (event) => {
        console.log('CLICK submit in the review page');
        event.preventDefault();
        // post
    }

    return(
        <div>
            <h3>Review Your Feedback</h3>
            <p>---feelings number goes here</p>
            <p>---understanding number goes here</p>
            <p>---support number goes here</p>
            <p>---any comments will go here</p>
            <button onSubmit={handleSubmit}>SUBMIT</button>
        </div>
    )
};

export default Review;