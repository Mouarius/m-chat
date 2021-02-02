import React from 'react'

const Info = (props) => {
  const { message } = props

  return <div className="text-sm text-gray-300">{message}</div>
}

export default Info
