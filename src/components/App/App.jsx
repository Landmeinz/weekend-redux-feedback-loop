import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// --- COMPONENTS --- //
import Header from '../Header/Header.jsx'




function App() {

  // const dispatch = useDispatch();

  // axios GET 

  return (
    <div className='App'>

      <Header />

    </div>
  );
}

export default App;
