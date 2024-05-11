import React, { useEffect, useState } from 'react'

function UseEffectIntreval() {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(pre => pre + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick , 1000)
         
        console.log(count);

        return () => {
            clearInterval(interval)
        }
    },[count])
  return (
    <div>
        {count}
    </div>
  )
}

export default UseEffectIntreval