import React, { useState } from 'react'

const Login = (props) => {
  const [inputUsername, setInputUsername] = useState('')

  const submitUsername = (event) => {
    event.preventDefault()
    if (inputUsername) {
      props.handleLogin(inputUsername)
    } else {
      window.alert('You must provide a username.')
    }
  }

  if (props.visibility) {
    return (
      <div
        id="login-window"
        className="fixed inset-0 z-10 pb-10 font-mono font-light bg-opacity-50 text-m-black backdrop-blur bg-m-black"
      >
        <form
          onSubmit={submitUsername}
          className="relative block max-w-md mx-auto text-left bg-white border-4 rounded-3xl top-1/2 border-m-black"
        >
          <header className="px-5 py-2 bg-m-black rounded-t-2xl">
            <h3 className="text-2xl font-medium text-white">login</h3>
          </header>
          <div className="flex flex-row items-center mx-4 mt-2 mb-2">
            {/* <label htmlFor="username" className="font-medium text-m-black">
              username :{' '}
            </label> */}
            <input
              name="usename"
              id="username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              className="flex-1 pl-1 mx-4 bg-m-gray text-m-black "
              placeholder="username"
            />
            <button
              type="submit"
              className={`box-border flex-none p-1 px-4 text-sm text-white border-2 rounded-full bg-${props.color} hover:bg-white hover:text-${props.color} border-${props.color}`}
            >
              ok
            </button>
          </div>
        </form>
      </div>
    )
  }
  return null
}
export default Login
