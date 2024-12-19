import React from 'react'
import Index from './router/Index'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    
    <UserContextProvider>
      <Index />
    </UserContextProvider>
  )
}

export default App