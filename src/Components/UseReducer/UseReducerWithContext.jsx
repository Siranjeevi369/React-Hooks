import React, { createContext, useReducer } from 'react'
import ControlUseReducer from './ControlUseReducer'

const initialState = {
    ram_asset: 0,
    siran_asset: 0
}

const reducer = (state,action) => {
    switch(action){
        case 'ram_asset':
            return {...state, ram_asset: action}
        case 'siran_asset':
            return {...state, siran_asset: 0}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const NewContext = createContext();
function UseReducerWithContext() {
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <NewContext.Provider value={{controlCount:count, controlDispatch: dispatch}}>
                <ControlUseReducer/>
        </NewContext.Provider>
        {/* <h1>Count {count.ram_asset}</h1>
        <button onClick={() => dispatch('ran_asset')}>test</button> */}
    </div>
  )
}

export default UseReducerWithContext