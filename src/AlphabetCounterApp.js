
import {
    createStore
} from 'redux';
import { alphabet } from './reducers';
import React from 'react';
import Alphabet from './containers/AlphabetCounterContainer';
import { Provider } from 'react-redux';

const store = createStore(alphabet, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;
export default function AlphabetCounterApp() {
    return (
        <Provider store={store}>
            <Alphabet />
        </Provider>
    )
}