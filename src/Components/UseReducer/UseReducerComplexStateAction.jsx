import React, { useReducer } from 'react'

const initialState ={
    ProductType : 'Car',
    price : 1000000,
    name : 'Thar'
    
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'Vitrus':
            return {...state ,price:state.price + action.increaseAmount , name: action.changeName}
        case 'Baleno':
            return {...state, price:state.price - action.increaseAmount , name: action.changeName}
        case 'Rolls_Roise':
            return {...state, price: action.increaseAmount, name:action.changeName}
        case 'actualPrice':
            return initialState
        case 'default':
            return state
    }
}

function UseReducerComplexStateAction() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [count1, dispatch1] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Car Name {count.name} Price {count.price}</h1>
        <button onClick={() => dispatch({type: 'Vitrus', changeName: 'Vitrus', increaseAmount:300000})}>Vitrus</button>
        <button onClick={() => dispatch({type: 'Baleno', changeName: 'Baleno', increaseAmount:500000})}>Baleno</button>
        <button onClick={() => dispatch({type: 'actualPrice', changeName: 'actualPrice', increaseAmount:300000})}>Default Thar</button>
        <h1>luxury Cars Name {count1.name} Price {count1.price}</h1>
        <button onClick={() => dispatch1({type: 'Rolls_Roise', changeName: 'Rolls Roice', increaseAmount:23000000})}>Rolls Roice</button>
    </div>
  )
}

export default UseReducerComplexStateAction
