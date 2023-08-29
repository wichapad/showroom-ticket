import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";

const Profile = () => {
  const [phone, setPhone] = useState("");
  const [countries, setCountrise] = useState(null);

  // Api รายชื่อ ประเทศ
  useEffect(() => {
    const countryData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v2/all?fields=name"
        );

        setCountrise(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    countryData();
  }, []);

  return (
    <div>
      <div className="m-4">
        <p className="text-[1.5rem] text-center">Profile</p>
        <div className="flex justify-center m-4">
          <form className="w-[350px]">
            <div className="flex">
              <div className="mr-2">
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
            </div>
            <div className="my-3">
              <label>Date of Birth</label>
              <input
                className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                type="date"
              />
            </div>
            <div>
              <label>Phone Number</label>
              <PhoneInput
                defaultCountry="th"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label>Adress</label>
              <textarea
                rows="3"
                className="p-2 border rounded shadow focus:border focus:border-gray-600"
                type="text"
              />
            </div>
            <div>
              <label>country</label>
              <select className="w-full border rounded shadow focus:border focus:border-gray-600">
                <option value="">Select</option>
                {countries?.map((country) => (
                  <option key={country?.name} value={country?.name}>
                    {country?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex my-3">
              <div className="mr-2">
                <label>Province</label>
                <input
                  className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                  type="text"
                />
              </div>
              <div>
                <label>District</label>
                <input
                  className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Zipcode</label>
                <input
                  className="px-3 py-2 border rounded shadow focus:border focus:border-gray-600"
                  type="text"
                />
              </div>
              <div className="text-center my-4">
                <button className="w-full uppercase text-base font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                  Update Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
