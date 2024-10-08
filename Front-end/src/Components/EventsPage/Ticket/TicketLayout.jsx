import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormatDateTime } from "../../FormatDateTime";
import axios from "axios";

const TicketLayout = () => {
  const { slug } = useParams();
  const [singleTicket, setSingleTicket] = useState([]);
  const { formatDate, formatTime } = FormatDateTime();

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

  return (
    <>
      <div>
        {singleTicket.map((item) => (
          <div key={item.event_id}>
            <div className="relative flex bg-black overflow-hidden">
              <div className="brightness-50 w-full filter blur-sm  h-[280px]">
                <img
                  className="w-full h-full object-cover"
                  src={item.artist_image}
                  alt="bandImage"
                />
              </div>
              <div className="absolute left-8 bottom-8 ">
                <div className="flex ">
                  <img
                    className="  aspect-video rounded-md object-cover w-[200px] md:w-[250px]"
                    src={item.artist_image}
                    alt="bandImage"
                  />
                  <div className="pl-8 text-white text-[0.8rem] md:text-[1rem]">
                    <p>{item.event_name}</p>
                    <p>{formatDate(item.event_date)}</p>
                    <p>{formatTime(item.event_time)}</p>
                    <span>{item.venue_name},</span>
                    <span>{item.venue_city},</span>
                    <span>{item.venue_state}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Outlet />
      </div>
    </>
  );
};

export default TicketLayout;
