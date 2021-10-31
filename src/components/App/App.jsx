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



function App() {

  // axios GET for admin page



  return (
    <Router>
      <div className='app-container'>
        <div className="content-container">
          <Header />

          <Route path="/" exact>
              <Feeling />
          </Route>

          <Route path="/understanding">
              <Understanding />
          </Route>

          <Route path="/support">
              <Support />
          </Route>

          <Route path="/comments">
              <Comments />
          </Route>
          
          <Route path="/review">
              <Review />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
