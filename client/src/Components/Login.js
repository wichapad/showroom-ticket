import logo from '../images/showroomlogo.png'
import { useState } from 'react'
import { authenticate } from '../services/autherize'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
const Login = (props) => {
    const [users, setUsers] = useState({
        email: "",
        password: ""
    })
    const { email, password } = users
    const inputValue = name => event => {
        setUsers({ ...users, [name]: event.target.value })
    }

    const submitUser = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_USERS}/auth/login`, { email, password })
            .then((response) => {
                // login success
                authenticate(response, () => props.history.push('/'))
            }).catch(err => {
                alert(err.response.data.error)
            })
    }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-purple-500">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="h-5 mr-3" alt="Showroom Logo" />
                    </a>
                </div>
            </nav>
            <div className="flex items-center justify-center h-screen bg-slate-50">
                <form onSubmit={submitUser} className="bg-white shadow-md rounded w-96 px-8 py-10" >
                    <img src="" alt="" />
                    <div className="form-input">
                        <label className="mb-2">
                            Email
                        </label>
                        <input id="email" type="email"
                            value={email}
                            onChange={inputValue("email")} />
                    </div>
                    <div className="form-input mb-8">
                        <label className="mb-2" >
                            Password
                        </label>
                        <input id="password" type="password"
                            value={password}
                            onChange={inputValue("password")} />
                    </div>
                    <div className="flex items-center justify-center">
                        <input type="submit" value="Sign In" className="button-container mb-8 cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-around">
                        <a className="text-xs" href="/">
                            Forgot Password?
                        </a>
                        <a className="text-sm underline" href="/register" >
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </>

    )
}

export default withRouter(Login)
