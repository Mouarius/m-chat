import React from 'react'

const Message = (props) => {
  const color = props.user === props.sender ? 'm-green' : 'm-black'
  const messageClassName = `border-2 border-${color} my-2 p-2`
  const userClassName = `font-medium text-${color}`
  return (
    <div className={messageClassName}>
      <h3 className={userClassName}>{props.sender}</h3>
      {props.content}
    </div>
  )
}

export default Message
