import React from 'react'
import ComponetA1 from './UseContext'
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ProvideMultiContext() {

  return (
    <div>
        <UserContext.Provider value={'Siranjeevi'}>
            <ChannelContext.Provider value={'Zoho corp'}>
                {/* <ComponetA1/> */}
                <ComponetA1/>
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default ProvideMultiContext