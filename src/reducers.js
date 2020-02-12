import { INCREMENT, DECREMENT, RESET } from "./actions";

let theAlphabet = 'abcdefghijklmnopqrstuvqxyz'.split('');

let currentState = {
    alphabet: theAlphabet,
    currentIndex: 12
}

export function alphabet(state=currentState, action) {
    let newState = {...state};

    switch(action.type) {
        case INCREMENT:
            newState.currentIndex += 1;
            break;
        case DECREMENT:
            newState.currentIndex -= 1;
            break;
        case RESET:
            newState.currentIndex = 12;
            break;
        default:
            break;
    }
    return newState;
}