import React, { useEffect, useState } from 'react'
import Chat from './components/Chat'
import Login from './components/Login'
import { appColorCode, getRandomColorIndex } from './util/common'
import usersService from './services/users'
import loginService from './services/login'
import { io } from 'socket.io-client'

let socket

const App = () => {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [color, setColor] = useState('')
  const [loginVisible, setLoginVisible] = useState(true)
  const ENDPOINT = 'https://boiling-temple-64465.herokuapp.com/'

  const handleLogin = async (username) => {
    console.log('login username :>> ', username)
    socket.emit('login', { username: username, color: color })
    setLoginVisible(false)
  }
  const initializeUsers = async () => {
    const usersInDb = await usersService.getAll()
    setUsers((prevUsers) => prevUsers.concat(usersInDb))
  }

  useEffect(() => {
    socket = io('localhost:3001/')
  }, [ENDPOINT])

  useEffect(() => {
    socket.on('logged user', (data) => {
      setUsers((prevUsers) => prevUsers.concat(data))
    })
    socket.on('login success', (data) => {
      setUser(data)
    })
    socket.on('user quit', () => {
      initializeUsers()
    })
  }, [])

  useEffect(() => {
    initializeUsers()
    setColor(appColorCode)
  }, [])

  return (
    <div className={`text-center`}>
      <Login
        visibility={loginVisible}
        handleLogin={handleLogin}
        color={color}
      />
      <Chat user={user} color={color} socket={socket} users={users} />
    </div>
  )
}

export default App
