import logo from "../images/showroomlogowhite.png";
import { useState, useEffect } from "react";
import {
  authenticate,
  getAdminToken,
  getClientToken,
} from "../services/autherize";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();

  //create state users
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const { email, password } = users;

  //กำหนดค่าให้ state
  const inputValue = (name) => (event) => {
    setUsers({ ...users, [name]: event.target.value });
  };

  //function submit login
  const submitUser = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_USERS}/auth/login`, { email, password })
      .then((response) => {
        // login success
        authenticate(response, () => navigate("/"));
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  // ตรวจสอบ token ว่ามีเก็บอยู่ใน session storage ไหม
  useEffect(() => {
    if (getAdminToken() || getClientToken()) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <nav className="relative z-50 bg-white border-gray-200 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-5 mr-3" alt="Showroom Logo" />
          </a>
        </div>
      </nav>
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <form
          onSubmit={submitUser}
          className="bg-white shadow-md rounded w-96 px-8 py-10"
        >
          <img src="" alt="" />
          <div className="form-input">
            <label className="mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={inputValue("email")}
            />
          </div>
          <div className="form-input mb-8">
            <label className="mb-2">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={inputValue("password")}
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Sign In"
              className="button-container mb-8 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-around">
            <a className="text-xs" href="/">
              Forgot Password?
            </a>
            <a className="text-sm underline" href="/register">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
