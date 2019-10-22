import React from 'react';
import Screens from './Components/Screens';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import Reducers from './Redux/Reducers';
import thunk from 'redux-thunk';

const App = () => {
    return (
        <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
            <Screens />
        </Provider>
    )
}

export default App;