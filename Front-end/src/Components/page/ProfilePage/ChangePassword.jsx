import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const ChangePassword = () => {
  const [oldPassword, setoldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState(false);

  const togglePassword = (field) => {
    if (field === "old") {
      setoldPassword(!oldPassword);
    } else if (field === "new") {
      setNewPassword(!newPassword);
    } else if (field === "confirm") {
      setconfirmPassword(!confirmPassword);
    }
  };
  return (
    <div>
      <div className="m-4">
        <p className="text-[1.5rem] text-center">Change password</p>
        <div className="flex justify-center m-4">
          <form className="w-[350px]">
            <div className="flex flex-col">
              <div className="form-input relative">
                <label className="mb-2">Old password</label>
                <input
                  className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                  id="password"
                  type={oldPassword ? "text" : "password"}
                />
                <button
                  className="absolute bottom-3 right-4"
                  type="button"
                  onClick={() => {
                    togglePassword("old");
                  }}
                >
                  {oldPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </button>
              </div>
              <div className="form-input relative">
                <label className="mb-2">New password</label>
                <input
                  className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                  id="password"
                  type={newPassword ? "text" : "password"}
                />
                <button
                  className="absolute bottom-3 right-4"
                  type="button"
                  onClick={() => {
                    togglePassword("new");
                  }}
                >
                  {newPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </button>
              </div>
            </div>
            <div>
              <div className="form-input relative">
                <label className="mb-2">Confirm password</label>
                <input
                  className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                  id="password"
                  type={confirmPassword ? "text" : "password"}
                />
                <button
                  className="absolute bottom-3 right-4"
                  type="button"
                  onClick={() => {
                    togglePassword("confirm");
                  }}
                >
                  {confirmPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </button>
              </div>
              <div className="text-center my-4">
                <button className="w-full uppercase text-base font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                  Update password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
