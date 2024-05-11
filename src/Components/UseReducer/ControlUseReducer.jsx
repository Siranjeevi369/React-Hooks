import React, { useContext } from 'react'

import { NewContext } from './UseReducerWithContext'

    
function ControlUseReducer() {
    const newContext = useContext(NewContext)
    console.log(newContext);
  return (
    <div>
        <h1>Ram Assets {newContext.controlCount.ram_asset}</h1>
        <button onClick={() => newContext.controlDispatch('ram_asset')}>Ram Asset</button>
    </div>
  )
}

export default ControlUseReducer