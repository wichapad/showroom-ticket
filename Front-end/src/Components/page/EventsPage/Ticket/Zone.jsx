import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Zone = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [singleTicket, setSingleTicket] = useState([]);

  const singleTicketData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/tickets/${slug}`
      );

      setSingleTicket(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleTicketData();
    // eslint-disable-next-line
  }, [slug]);

  if (singleTicket.length === 0) {
    navigate(`/booking/${slug}/notfound`);
    
    return null;
  }

  return (
    <div>
      {singleTicket.map((item) => (
        <div key={item.event_id}>
          <div className="flex justify-center mt-4">
            {item.zone.map((des, index) => (
              <div key={index} className=" px-4  text-center">
                <p>{des.description}</p>
                <p>{des.price}$</p>
              </div>
            ))}
          </div>
          <div className="m-4">
            <div className="flex justify-center ">
              <div>
                {item.zone.map((zone, index) => (
                  <div key={index} className="flex p-2">
                    <NavLink
                      to={`/booking/${item.slug_event}/${zone.ctgy_id}`}
                      className="w-[200px] bg-purple-600 text-gray-200 text-lg uppercase text-center rounded py-4 hover:bg-violet-700 duration-500 active:scale-[0.98] "
                    >
                      {zone.area}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 flex justify-center">
              <p className=" w-[200px] bg-gray-500 text-white text-lg uppercase text-center rounded py-4">
                Stage
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Zone;
