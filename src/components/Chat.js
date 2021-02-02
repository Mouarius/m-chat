import React, { useEffect, useRef, useState } from 'react'
import Info from './Info'
import Message from './Message'

const Chat = (props) => {
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [feed, setFeed] = useState([])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (props.socket) {
      props.socket.on('message', (data) => {
        console.log('data :>> ', data)
        setMessages((messages) => messages.concat(data))
        setFeed((elem) => elem.concat({ type: 'message', data: data }))
        console.log('messages :>> ', messages)
      })
      props.socket.on('logged user', (data) => {
        const infoMessage = data.username + ' has logged in.'
        setFeed((elems) => elems.concat({ type: 'info', data: infoMessage }))
      })
    }
  }, [props.socket])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      <div className="inline-block text-left bg-white border-4 border-m-black rounded-3xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <header className="px-5 py-3 rounded-t-xl bg-m-black">
          <h1 className="text-2xl font-medium text-white">m_chat_app</h1>
        </header>
        <div className="p-5 overflow-y-scroll bg-white h-96">
          {feed.map((element) =>
            element.type === 'message' ? (
              <Message
                key={element.data.id}
                content={element.data.content}
                sender={element.data.sender}
                user={props.user}
              />
            ) : (
              <Info message={element.data} />
            )
          )}
          <div id="end-of-messages" ref={messagesEndRef} />
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
