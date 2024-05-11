import React, { useEffect, useState } from 'react'

function ConditionallyRunEffects() {

    const [details,setDetails] = useState({name:'', palce:''});
    const [count, setCount] = useState(0);


    useEffect(() =>{
        console.log(`name : ${details.name} place : ${details.palce}`);

        // const data = () => {
        //     console.log('button clicked');
        // }
        
    })


  return (
    <div>
        <input type="text" value={details.name} onChange={e => setDetails({...details,name:e.target.value})}/>
        <input type="text" value={details.palce} onChange={e => setDetails({...details, palce: e.target.value})}/>        
        <button onClick={() => setCount(pre => pre + 1)}>Count {count}</button>
        
    </div>
  )
}

export default ConditionallyRunEffects