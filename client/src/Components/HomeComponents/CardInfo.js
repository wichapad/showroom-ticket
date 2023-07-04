import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
const CardInfo = () => {
  const { slug } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_USERS}/api/events/${slug}`)
        .then((response) => {
          setSingleEvent(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <Navbar />
      <div className=" flex flex-wrap justify-center  mx-auto ">
        <div className="home-background max-w-screen-xl">
          {singleEvent.map((event, index) => (
            <div key={index}>
              <img src={event.images.band_image} alt=""/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardInfo;
