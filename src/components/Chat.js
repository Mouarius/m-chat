import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import Message from './Message'

let socket

const Chat = () => {
  const [inputMessage, setInputMessage] = useState('')
  const [userID, setUserID] = useState('')
  const [messages, setMessages] = useState([])

  const ENDPOINT = 'localhost:8000'

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.on('connected', (id) => {
      setUserID(id)
    })
  }, [ENDPOINT])

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages((messages) => [...messages, data])
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    console.log(inputMessage)
    socket.emit('send message', { senderID: userID, content: inputMessage })
    setInputMessage('')
  }
  return (
    <div
      id="chat-window"
      className="fixed z-10 inset-0 overflow-y-auto font-mono font-light"
    >
      <div className="min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="inline-block align-center bg-white border-m-black border-4 rounded-3xl text-left overflow-hidden sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <header className="bg-m-black px-5 py-3">
            <h1 className="text-2xl font-medium text-white">m_chat_app</h1>
          </header>
          <div className="p-5 bg-white">
            {messages.map((message) => (
              <Message
                key={message.id}
                content={message.content}
                senderID={message.senderID}
                userID={userID}
              />
            ))}
          </div>
          <footer className="px-5 py-3 border-m-black border-t-4 ">
            <form
              onSubmit={sendMessage}
              id="chat-input"
              className="grid grid-cols-5 gap-3"
            >
              <input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="bg-m-gray col-span-4 px-2 font-medium"
              ></input>
              <button
                type="submit"
                className="box-border bg-m-green rounded-full text-white hover:bg-white hover:text-m-green border-2 border-m-green"
              >
                send
              </button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Chat
