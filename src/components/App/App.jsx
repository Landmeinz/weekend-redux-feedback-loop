import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


// --- COMPONENTS --- //
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Admin from '../Admin/Admin.jsx';



function App() {

  const dispatch = useDispatch();

  // axios GET for admin page

  function getFeedback() {
    axios({
      method: 'GET',
      url: '/feedback'
    })
      .then(response => {
        console.log('GET /feedback response', response);
        dispatch({
          type: 'GET_FEEDBACK',
          payload: response.data
        })
      })
      .catch(error => {
        console.log('GET /feedback ERROR', error);
      });
  }


  return (
    <Router>
      <div className='app-container'>

        <div className="content-container">

          <div className="admin-display">
            <Route path="/admin" exact>
              <Admin 
                getFeedback={getFeedback}/>
            </Route>
          </div>

          <Route path="/" exact>
            <Header />
            <Feeling />
          </Route>

          <Route path="/understanding">
            <Header />
            <Understanding />
          </Route>

          <Route path="/support">
            <Header />
            <Support />
          </Route>

          <Route path="/comments">
            <Header />
            <Comments />
          </Route>

          <Route path="/review">
            <Header />
            <Review />
          </Route>

        </div>

      </div>
    </Router>
  );
}

export default App;
