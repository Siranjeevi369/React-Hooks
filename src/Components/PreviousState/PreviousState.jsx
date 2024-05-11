import React, { useState } from 'react'

function PreviousState() {
    const initialState = 0;

    const [count, setCount] = useState(initialState)

    const increamentFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prev => prev + 1)
        }
    }
    const decrementTwo = () => {
        setCount(prev => prev - 2)
    }

  return (
    <div>
        count {count}
        <button onClick={increamentFive}>increament five</button>
        <button onClick={decrementTwo}>increament two</button>
    </div>
  )
}

export default PreviousState