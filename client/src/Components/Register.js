import { useState } from 'react'
const Register = () => {
  const [users, setUsers] = useState({
    email: "",
    username: "",
    password: ""
  })
  const { email, username, password } = users
  //กำนหดค่าให้ state
  const inputValue = name => event => {
    setUsers({...users,[name]:event.target.value})
  }
 

  return (
    <div className="flex items-center justify-center h-screen bg-slate-50">
      <form className="bg-white shadow-md rounded w-96 px-8 py-10" >
        <div className="form-input">
          <label className="mb-2">
            Email
          </label>
          <input id="email" type="email"
            value={email}
            onChange={inputValue("email")} />
        </div>
        <div className="form-input">
          <label className="mb-2">
            Username
          </label>
          <input id="user" type="text"
            value={username}
            onChange={inputValue("username")} />
        </div>
        <div className="form-input">
          <label className="mb-2" >
            Password
          </label>
          <input id="password" type="password"
            value={password}
            onChange={inputValue("password")} />
        </div>
        <div className="form-input mb-8">
          <label className="mb-2" >
            Confirm Password
          </label>
          <input id="confirm" type="password" />
        </div>
        <div className="flex items-center justify-center">
          <button className="button-container mb-8" type="submit" value="signin">
            Sign Up
          </button>
        </div>
        <div className="flex items-center justify-around">

          <a className="text-sm underline" href="/login" >
            Sign In
          </a>
        </div>
      </form>
    </div>
  )
}

export default Register
