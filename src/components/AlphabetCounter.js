import React from 'react';

export default function AlphabetCounter({
    alphabet,
    currentIndex,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    return (
        <div>
            <h1>{alphabet[currentIndex]}</h1>
            <button onClick={handleDecrement}><h1>◄</h1></button>
            <button onClick={handleIncrement}><h1>►</h1></button>
            <button onClick={handleReset}><h1>↺</h1></button>
        </div>
    )
}