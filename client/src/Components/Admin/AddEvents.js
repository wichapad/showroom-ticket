import { useState } from 'react'

const AddEvents = () => {
  const [formData, setFormData] = useState({
    band: {
      artist: "",
      description: "",
      genre: "",
    },
    images: {
      band_image: "",
      poster_image: "",
    },
    showSchedule: [{
      dates: [{ localDate: "", localTime: "" }],
      location: [{ name_show: "", venue: "", state: "", city: "" }],
    }],
    ticket: [{ ticket_type: "", ticket_price: "" }]
  })

  const inputvalue = (e) => {
    const { name, value } = e.target;
    const [section, field, subField] = name.split('.')
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: subField ? { ...prevData[section][field], [subField]: value } : value,
      },
    }))
  }

  return (
    <div className="flex flex-col justify-center  w-full max-w-2xl m-auto">
      <h1 className="text-center">Showroom Events</h1>
      <form className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4">
        <div className="flex">
          {/* Add Band form */}
          <div className="mb-2 w-full pr-2">
            <h1 className="text-center">Band</h1>
            {JSON.stringify(formData.band)}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Artist:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="band.artist"
                type="text"
                value={formData.band.artist}
                onChange={inputvalue}
              />
            </div>
            <div className="my-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="band.description"
                type="text"
                value={formData.band.description}
                onChange={inputvalue}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Genre:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="band.genre"
                type="text"
                value={formData.band.genre}
                onChange={inputvalue}

              />
            </div>
          </div>
          {/* Add Image form */}

          <div className="w-full">
            {JSON.stringify(formData.images)}
            <h1 className="text-center">Image</h1>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Band_Image:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="images.band_image"
                type="text"
                value={formData.images.band_image}
                onChange={inputvalue}
              />
            </div>
            <div className="my-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Poster_Image:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="images.poster_image"
                type="text"
                value={formData.images.poster_image}
                onChange={inputvalue}
              />
            </div>
          </div>
        </div>
        <hr />
        {/* Add Showschedule form */}
        <div className="my-2 flex">
          {/* Date */}
          <div className="w-full pr-2">
            {JSON.stringify(formData.showSchedule[0].dates)}
            <h1 className="text-center">Date</h1>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="showSchedule.dates.localDate"
                type="date"
                value={formData.showSchedule[0].dates[0].localDate}
                onChange={inputvalue}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Time:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="localTime"
                type="text"
              />
            </div>
          </div>
          {/* Location */}
          <div className="w-full">
            {JSON.stringify(formData.showSchedule[0].location)}
            <h1 className="text-center">Location</h1>
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  name_show:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name_show"
                  type="text"


                />
              </div>
              <div >
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Venue:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"

                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  State:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"

                />
              </div>
              <div >
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"

                />
              </div>
            </div>
          </div>

        </div>
        <div className="text-center mb-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-8  rounded focus:outline-none focus:shadow-outline"
            type="button"

          >
            Add Schedule
          </button>
        </div>

        <hr />
        {/* Add Ticket form */}
        <div className="my-2">
          {JSON.stringify(formData.ticket)}
          <h1 className="text-center mb-2">Ticket</h1>
          <div className="flex">
            <div className="w-full pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ticket_Type:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name='ticket[0].ticket_type'
                type="text"
                value={formData.ticket[0].ticket_type}
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ticket_price:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold   py-2 px-8   rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Ticket
            </button>
          </div>
        </div>
        <hr />
        {/* Submit Data */}
        <div className="flex items-center justify-end mt-4 ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-10  rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Data
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default AddEvents;
