import logo from "../../images/showroomlogowhite.png";
import { useState, useEffect } from "react";
import { authenticate, getAdminId, getClientId } from "./services/autherize";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  //create state users
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const { email, password } = users;

  const inputValue = (name) => (event) => {
    setUsers({ ...users, [name]: event.target.value });
  };

  //function submit login
  const submitUser = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${process.env.REACT_APP_API}/auth/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // login success
        authenticate(response, () => (window.location = "/"));
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  // ตรวจสอบ token ว่ามีเก็บอยู่ใน session storage ไหม
  useEffect(() => {
    if (getAdminId() || getClientId()) {
      window.location = "/";
    }
    // eslint-disable-next-line
  }, []);

  const togglePassword = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    }
  };

  return (
    <>
      <nav className="relative bg-white z-50 border-gray-200 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-5 mr-3" alt="Flowbite Logo" />
          </a>
        </div>
      </nav>
      <div className="flex items-center justify-center text-sm h-screen">
        <form
          onSubmit={submitUser}
          className="bg-gray-50 shadow-md rounded w-96 px-8 py-10"
        >
          <img src="" alt="" />
          <div className="form-input">
            <label className="mb-2">Email</label>
            <input
              className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
              id="email"
              type="email"
              value={email}
              onChange={inputValue("email")}
            />
          </div>
          <div className="form-input relative">
            <label className="mb-2">Password</label>
            <input
              className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={inputValue("password")}
            />
            <button
              className="absolute bottom-3 right-4"
              type="button"
              onClick={() => {
                togglePassword("password");
              }}
            >
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Sign In"
              className="w-full bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95 uppercase text-sm font-bold py-3 px-4 text-gray-200 rounded-lg mb-8 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-around">
            <a className="text-xs" href="/">
              Forgot Password?
            </a>
            <a className="text-sm uppercase underline" href="/register">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
