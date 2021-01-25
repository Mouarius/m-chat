import React, { useEffect, useState } from 'react'
import Chat from './components/Chat'
import Login from './components/Login'

const App = () => {
  const [username, setUsername] = useState('')
  const [loginVisible, setLoginVisible] = useState(true)

  const handleLogin = (username) => {
    console.log('username :>> ', username)
    setUsername(username)
    setLoginVisible(false)
  }

  return (
    <div className="text-center">
      <Login visibility={loginVisible} handleLogin={handleLogin} />
      <Chat user={username} />
    </div>
  )
}

export default App
