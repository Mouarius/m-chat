import React, { useEffect, useState } from 'react'

const Login = (props) => {
  const [inputUsername, setInputUsername] = useState('')
  // useEffect(() => {
  //   window.localStorage.removeItem('loggedUserUsername')
  // }, [])

  const submitUsername = (event) => {
    event.preventDefault()
    props.handleLogin(inputUsername)
  }

  if (props.visibility) {
    return (
      <div
        id="login-window"
        className="z-10 pb-10 fixed backdrop-blur bg-m-black bg-opacity-50 text-center inset-0 font-mono font-light text-white"
      >
        <form
          onSubmit={submitUsername}
          className="bg-white inline-block relative max-w-sm overflow-hidden mx-auto top-1/2 border-m-black border-4 rounded-3xl text-left justify-center min-w-min"
        >
          <header className="bg-m-black px-5 py-2">
            <h3 className="text-2xl font-medium text-white">login</h3>
          </header>
          <div className="mt-2 mb-2 mx-4">
            <label htmlFor="username" className="font-medium text-m-black">
              username :{' '}
            </label>
            <input
              name="usename"
              id="username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              className="bg-m-gray text-m-black pl-1"
            />
            <input type="submit" style={{ display: 'none' }} />
          </div>
        </form>
      </div>
    )
  }
  return null
}
export default Login
