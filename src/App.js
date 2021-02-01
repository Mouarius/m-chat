import React, { useEffect, useState } from 'react'
import Chat from './components/Chat'
import Login from './components/Login'
import { appColorCode, getRandomColorIndex } from './util/common'
import usersService from './services/users'
import loginService from './services/login'
import { io } from 'socket.io-client'

let socket

const App = () => {
  const [username, setUsername] = useState('')
  const [users, setUsers] = useState([])
  const [color, setColor] = useState('')
  const [loginVisible, setLoginVisible] = useState(true)
  const ENDPOINT = 'https://boiling-temple-64465.herokuapp.com/'

  const handleLogin = async (username) => {
    console.log('login username :>> ', username)
    socket.emit('login', { username: username })
    setLoginVisible(false)
  }

  useEffect(() => {
    socket = io('localhost:3001/')
  }, [ENDPOINT])

  useEffect(() => {
    socket.on('logged user', (data) => {
      setUsers((prevUsers) => prevUsers.concat(data))
    })
  }, [])

  useEffect(() => {
    const initializeUsers = async () => {
      const usersInDb = await usersService.getAll()
      setUsers((prevUsers) => prevUsers.concat(usersInDb))
    }
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
      <Chat user={{ username }} color={color} socket={socket} />
    </div>
  )
}

export default App
