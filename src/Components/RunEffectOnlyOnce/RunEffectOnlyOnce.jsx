import React, { useEffect, useState } from 'react'

function RunEffectOnlyOnce() {
    const [x,setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('mouse Event');
        setX(e.clientX);
        setY(e.clientY);

    }

    useEffect(() => {
        console.log('useEffect called');
        document.getElementById('getMEvent').addEventListener('mousemove',logMousePosition)

        return () => {
            console.log('component unmountuing code');
            document.getElementById('getMEvent').removeEventListener('click',logMousePosition)
        }
        
    },[])

  return (
    <div>
        <h1 id='getMEvent'>Hooks X - {x} Y - {y}</h1>
    </div>
  )
}

export default RunEffectOnlyOnce