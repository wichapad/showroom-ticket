import React from "react";

const Profile = () => {
  return (
    <div className="pt-[5rem]">
      <p className="text-2xl">Profile</p>
      <div className="w-[350px]">
        <form>
          <div>
            <div>
              <label>First Name</label>
              <input
                className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                type="text"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                type="text"
              />
            </div>
            <div>
              <label>Date of Birth</label>
              <input
                className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                type="date"
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label>Adress</label>
              <textarea
                rows="3"
                className="p-2 border rounded shadow focus:border focus:border-gray-600"
                type="text"
              />
            </div>
            <div>
              <label>country</label>
              <select className="w-full border rounded shadow focus:border focus:border-gray-600" />
            </div>
            <div>
              <label>Province</label>
              <select className="w-full border rounded shadow focus:border focus:border-gray-600" />
            </div>
            <div>
              <label>District</label>
              <select className="w-full border rounded shadow focus:border focus:border-gray-600" />
            </div>
            <div>
            <div>
              <label>Zipcode</label>
              <input
                className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                type="text"
              />
            </div>
              <button>Update Details</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
