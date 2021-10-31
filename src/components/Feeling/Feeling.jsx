
import './Feeling.css'

import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MUI imports;
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';


function Feeling(){

    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(0);

    
    const handleSubmit = (event) => {
        console.log('CLICK next in the feeling form');
        event.preventDefault();
        if(feeling > 0){
            dispatch({
                type:   'ADD_FEELING',
                payload: feeling
            })
        } else {
            return alert('please make a selection')
        }

        setFeeling('');

        history.push('/understanding')
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
      


    return(
        <form className="form-feeling" onSubmit={(event) => handleSubmit(event)}>
            <h3>How are you feeling today?</h3>

            <Slider
                step={1}
                marks={marks}
                min={1}
                max={5}
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                required
            />      
            <Button 
                variant="outlined"
                type="submit"
            >NEXT</Button>
        </form>
    )
};

export default Feeling;





// radio? 

{/* <fieldset onSubmit={handleSubmit}>
            <legend>HOW ARE YOU FEELING TODAY?</legend>
            <label htmlFor=""></label>
            1<input type="radio" name="rating" value="1" />
            2<input type="radio" name="rating" value="2" />
            3<input type="radio" name="rating" value="3" />
            4<input type="radio" name="rating" value="4" />
            5<input type="radio" name="rating" value="5" />
            <button type="submit">NEXT</button>
        </fieldset> */}