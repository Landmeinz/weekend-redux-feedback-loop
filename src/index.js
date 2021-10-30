import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// --- REDUCERS --- //

const formData = {
    feeling:        '',
    understanding:  '',
    support:        '',
    comments:       ''
}

const formReducer = (state=formData, action) => {

    if(action.payload === 'ADD_FEELING'){
        return {...state, feeling: action.payload}
    }
    return state;

    // switch (action.type) {
    //     case 'ADD_FEELING':
    //         return {...state, feeling: action.payload}
    //         break;
    
    //     default:

    //         break;
    // }
}

const storeInstance = createStore(
    combineReducers({
        formReducer
    }), 
    applyMiddleware(logger)
);




ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();


