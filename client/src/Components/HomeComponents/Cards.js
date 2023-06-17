import axios from "axios"
import React, { useEffect, useState } from "react"
const Card = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_USERS}/api/events`)
            .then((response) => {
                setEvents(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="flex flex-wrap items-center justify-center w-full">
            {events.map((event) => {
                return (
                    <div key={event.id} >
                        <div className="max-w-xs rounded overflow-hidden shadow-lg m-6">
                            <img className="w-full object-cover" src={event.Image} alt={event.NameArtlist} />
                            <div className="px-6 py-4">
                                <p className="text-base mb-2">
                                    Name : {event.NameArtlist}
                                </p>
                                <p className="text-base mb-2">
                                    Date : {event.Date}
                                </p>
                                <p className="text-gray-500 text-base">
                                    Location : {event.Location}
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="button-container">Ticket</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
