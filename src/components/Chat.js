import React, { useEffect, useState } from 'react'
import Message from './Message'

const Chat = (props) => {
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (props.socket) {
      props.socket.on('message', (data) => {
        console.log('data :>> ', data)
        setMessages((messages) => messages.concat(data))
        console.log('messages :>> ', messages)
      })
    }
  }, [props.socket])

  const sendMessage = (event) => {
    event.preventDefault()
    props.socket.emit('send message', {
      sender: props.user,
      content: inputMessage,
    })
    setInputMessage('')
  }
  return (
    <div
      id="chat-window"
      className={`fixed inset-0 z-0 overflow-y-auto font-mono font-light bg-${props.color}`}
    >
      {/* <div className="min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"> */}
      <div className="inline-block overflow-hidden text-left bg-white border-4 border-m-black rounded-3xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <header className="px-5 py-3 bg-m-black">
          <h1 className="text-2xl font-medium text-white">m_chat_app</h1>
        </header>
        <div className="p-5 bg-white">
          {messages.map((message) => (
            <Message
              key={message.id}
              content={message.content}
              sender={message.sender}
              user={props.user}
            />
          ))}
        </div>
        <footer className="px-5 py-3 border-t-4 border-m-black ">
          <form
            onSubmit={sendMessage}
            id="chat-input"
            className="grid grid-cols-5 gap-3"
          >
            <input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="col-span-4 px-2 font-medium bg-m-gray"
            ></input>
            <button
              type="submit"
              className={`box-border text-white border-2 rounded-full bg-${props.color} hover:bg-white hover:text-${props.color} border-${props.color}`}
            >
              send
            </button>
          </form>
        </footer>
      </div>
    </div>
    // </div>
  )
}

export default Chat
