import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// --- REDUCERS --- //

const adminReducer = (state=[], action) => {

    if(action.type === 'GET_FEEDBACK') {
        return action.payload;
    }
    return state;
}


const feedbackData =
{
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
};

const formReducer = (state = feedbackData, action) => {

    if (action.type === 'ADD_FEELING') {
        return { ...state, feeling: action.payload }
    }
    if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: action.payload }
    }
    if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload }
    }
    if (action.type === 'ADD_COMMENT') {
        return { ...state, comments: action.payload }
    }
    if (action.type === 'CLEAR_ALL') {
        return feedbackData
    }

    return state;
}

// store open 24/7;
const storeInstance = createStore(
    combineReducers({
        formReducer,
        adminReducer,
    }),
    applyMiddleware(logger)
);




ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


