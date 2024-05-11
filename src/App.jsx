import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './Components/useState/UseState'
import UseStateArray from './Components/UseStateArray/UseStateArray'
import PreviousState from './Components/PreviousState/PreviousState'
import UseStateObject from './Components/UseStateObject/UseStateObject'
import UseEffectAfterRender from './Components/UseEffectAfterRender/UseEffectAfterRender'
import ConditionallyRunEffects from './Components/ConditionallyRunEffect/ConditionallyRunEffects'
import RunEffectOnlyOnce from './Components/RunEffectOnlyOnce/RunEffectOnlyOnce'
import UseEffectIntreval from './Components/USeEffectWithInterval/UseEffectIntreval'
import ProvideMultiContext from './Components/UseContext/ProvideMultiContext'
import UseReducerSimpleSateAction from './Components/UseReducer/UseReducerSimpleSateAction'
import UseReducerComplexStateAction from './Components/UseReducer/UseReducerComplexStateAction'
import RichTextField from './Components/Fields/RichText'
import ControlUseReducer from './Components/UseReducer/ControlUseReducer'
import UseReducerWithContext from './Components/UseReducer/UseReducerWithContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseState/> */}
      {/* <UseStateArray/> */}
      {/* <PreviousState/> */}
      {/* <UseStateObject/> */}
      {/* <UseEffectAfterRender/> */}
      {/* <ConditionallyRunEffects/> */}
      {/* <RunEffectOnlyOnce/>       */}
      {/* <UseEffectIntreval/> */}
      {/* <ProvideMultiContext/> */}
      {/* <UseReducerSimpleSateAction/> */}
      {/* <UseReducerComplexStateAction/> */}
      {/* <RichTextField/> */}
     <UseReducerWithContext/>
    </>
  )
}

export default App
