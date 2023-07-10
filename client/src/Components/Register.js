import { useEffect, useState } from "react";
import logo from "../images/showroomlogowhite.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authenticate, getUser } from "../services/autherize";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Register = () => {
  // สร้าง navigate ด้วย react-router-dom เพื่อให้เวลา กด submit แล้ว redirect ไปหน้า home
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //create state users
  const [users, setUsers] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { email, username, password, confirmPassword } = users;

  //กำหนดค่าให้ state
  const inputValue = (name) => (event) => {
    setUsers({ ...users, [name]: event.target.value });
  };

  //function submit register
  const submitData = async (e) => {
    e.preventDefault();

    //password length < 6
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await axios
      .post(`${process.env.REACT_APP_USERS}/users/register`, {
        email,
        username,
        password,
      })
      .then((response) => {
        authenticate(response, () => {
          navigate("/");
        });
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  useEffect(() => {
    getUser() && navigate("/");
    // eslint-disable-next-line
  }, []);

  const togglePassword = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <>
      <nav className="bg-white z-50 border-gray-200 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-5 mr-3" alt="Flowbite Logo" />
          </a>
        </div>
      </nav>
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <form
          onSubmit={submitData}
          className="bg-white shadow-md rounded w-96 px-8 py-10"
        >
          <div className="form-input">
            <label className="mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={inputValue("email")}
            />
          </div>
          <div className="form-input">
            <label className="mb-2">Username</label>
            <input
              id="user"
              type="text"
              value={username}
              onChange={inputValue("username")}
            />
          </div>
          <div className="form-input relative">
            <label className="mb-2">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={inputValue("password")}
            />
            <button
              className="absolute bottom-4 right-4"
              type="button"
              onClick={() => {
                togglePassword("password");
              }}
            >
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </button>
          </div>

          <div className="form-input mb-8 relative">
            <label className="mb-2">Confirm Password</label>
            <input
              id="confirm"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={inputValue("confirmPassword")}
            />
            <button
              className="absolute bottom-4 right-4"
              type="button"
              onClick={() => {
                togglePassword("confirm");
              }}
            >
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Sign Up"
              className="button-container mb-8 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-around">
            <a className="text-sm underline" href="/login">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
