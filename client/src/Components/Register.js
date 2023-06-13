import { useState } from 'react'
import logo from '../images/showroomlogo.png'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    email: "",
    username: "",
    password: ""
  })
  const { email, username, password } = users
  //กำหนดค่าให้ state
  const inputValue = name => event => {
    setUsers({ ...users, [name]: event.target.value })
  }

  const submitData = (e) => {
    e.preventDefault();
    console.log("USERS DB = ", process.env.REACT_APP_USERS);
    axios
      .post(`${process.env.REACT_APP_USERS}/users/register`, { email, username, password })
      .then(response=>{
        navigate('/')
      }).catch(err=>{
        alert(err.response.data.error)
      })
  }


  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-purple-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-5 mr-3" alt="Flowbite Logo" />

          </a>
        </div>
      </nav>
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <form onSubmit={submitData} className="bg-white shadow-md rounded w-96 px-8 py-10" >
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
            <input type="submit" value="Sign Up" className="button-container mb-8 cursor-pointer" />
          </div>
          <div className="flex items-center justify-around">

            <a className="text-sm underline" href="/login" >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </>

  )
}

export default Register
