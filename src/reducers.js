import { INCREMENT, DECREMENT, RESET } from "./actions";

let theAlphabet = 'abcdefghijklmnopqrstuvqxyz'.split('');

let currentState = {
    alphabet: theAlphabet,
    currentIndex: 25
}

export function alphabet(state=currentState, action) {
    let newState = {...state};

    switch(action.type) {
        case INCREMENT:
            // newState.currentIndex += 1;
            newState.currentIndex = (newState.currentIndex > 24) ? 0 : newState.currentIndex +1;
            break;
        case DECREMENT:
            // newState.currentIndex -= 1;
            newState.currentIndex = (newState.currentIndex < 1) ? 25 : newState.currentIndex -1;
            break;
        case RESET:
            newState.currentIndex = 12;
            break;
        default:
            break;
    }
    return newState;
}