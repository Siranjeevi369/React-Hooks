import React, { useState } from 'react'

function UseStateArray() {

    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {Stacks_Name : "Utherium", Stacks_Rate : Math.floor(Math.random() * 101)}])
    }
    // console.log(items);
    
  return (
    <div>
        <button onClick={addItem}>Add Items</button>
        {items.map((item, index) => (
            <ol>
                <li key={index}>Stacks Name: {item.Stacks_Name} Stacks Rate {item.Stacks_Rate}</li>
            </ol>
        ))}
    </div>
  )
}

export default UseStateArray