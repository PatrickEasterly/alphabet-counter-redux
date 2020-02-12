import {
    connect
} from 'react-redux';

import AlphabetCounter from '../components/AlphabetCounter';
import { actionIncrement, actionDecrement, actionReset } from '../actions';

function mapStateToProps(state) {
    return {
        alphabet: state.alphabet,
        currentIndex: state.currentIndex
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleIncrement: ()=> {
            dispatch(actionIncrement())
        },
        handleDecrement: ()=> {
            dispatch(actionDecrement())
        },
        handleReset: ()=> {
            dispatch(actionReset())
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(AlphabetCounter);