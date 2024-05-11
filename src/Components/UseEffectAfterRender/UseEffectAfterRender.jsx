import React, { useEffect, useState } from 'react'

function UseEffectAfterRender() {

    const [count, setCount] = useState(0);

    useEffect(() =>{

        document.title = `You clicked ${count} count`;

        console.log("changed count");

    })

  return (
    <div>
        <button onClick={() => setCount(pre => pre + 1)}>count {count}</button>
    </div>
  )
}

export default UseEffectAfterRender