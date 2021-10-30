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

  // const dispatch = useDispatch();


  // axios GET 


  return (
    <div className='app-container'>

      <Header />
      <Feeling />
      <Understanding />
      <Support />
      <Comments />
      <Review />

    </div>
  );
}

export default App;
