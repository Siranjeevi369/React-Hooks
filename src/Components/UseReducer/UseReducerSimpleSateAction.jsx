import React, { useReducer } from 'react'

const initialState  = 0;

const reducer = (state, action ) => {
    switch(action) {
        case 'increament':
            return state + 1
        case 'decreament':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function UseReducerSimpleSateAction() {
    const[count,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={() => dispatch('increament') }>increament</button>
        <button onClick={() => dispatch('decreament')}>decreament</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerSimpleSateAction