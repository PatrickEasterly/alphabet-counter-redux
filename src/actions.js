// Action constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// Actions
export function actionIncrement() {
    return ({
        type: INCREMENT
    })
}

export function actionDecrement() {
    return ({
        type: DECREMENT
    })
}

export function actionReset() {
    return ({
        type: RESET
    })
}