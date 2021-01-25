import React from 'react'

const Message = (props) => {
  const color = props.userID === props.senderID ? 'm-green' : 'm-black'
  const messageClassName = `border-2 border-${color} my-2 p-2`
  return (
    <div className={messageClassName}>
      <h3 className="font-medium">{props.senderID}</h3>
      {props.content}
    </div>
  )
}

export default Message
