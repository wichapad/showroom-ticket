import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
const CardInfo = () => {
  const { slug } = useParams();
  const [singleEvent, setSingleEvent] = useState(null);

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
      <div className="max-w-screen-xl mx-auto ">
        {singleEvent && (
          <div>
            <img src={singleEvent.images.poster_image}/>
            <div className="w-96">
              <img src={singleEvent.images.band_image} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardInfo;
