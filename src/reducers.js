import { INCREMENT, DECREMENT, RESET } from "./actions";

let alphabet = 'abcdefghijklmnopqrstuvqxyz'.split('');

let currentState = {
    alphabet,
    currentIndex: 12
}

export function alphabet(state=currentState, action) {
    let newState = state;

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