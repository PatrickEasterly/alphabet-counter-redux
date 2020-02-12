
import {
    createStore
} from 'redux';
import { alphabet } from './reducers';
import React from 'react';
import Alphabet from './containers/AlphabetCounterContainer';
import { Provider } from 'react-redux';

const store = createStore(alphabet, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;


export default class AlphabetCounterApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counters: [1],
            count: 2
        }
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.yeetState}>Click me</button>
                {this.state.counters.map((x)=>{
                    return (
                        <div id={x}>
                            <Provider store={createStore(alphabet)}>
                            <Alphabet />
                            <button onClick={this.handleDelete}>Delete</button>
                            </Provider>
                        </div>
                    )
                })}
            </div>
        )
    }
    yeetState=()=>{
        let newState = {...this.state};
        newState.counters.push(newState.count);
        newState.count++;
        this.setState(newState)
    }
    handleDelete=(id)=>{
        let newState = {...this.state};
        newState.counters.splice((id + 1), 1);
        this.setState(newState)
    }
}