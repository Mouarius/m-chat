import React from 'react'

const Message = (props) => {
  const messageClassName = `border-2 border-${props.sender.colorTag} my-2 p-2`
  const userClassName = `font-medium text-${props.sender.colorTag}`
  return (
    <div className={messageClassName}>
      <h3 className={userClassName}>{props.sender.username}</h3>
      {props.content}
    </div>
  )
}

export default Message
