import React from 'react'

const UpdateEvent = ({isVisible}) => {
  return (
    <div
    className={`${
        isVisible ? "translate-x-0" : "translate-x-full"
    } fixed top-0 right-0 h-full w-full bg-white transition-transform ease-in-out duration-300`}
    style={{ width: "350px" }}
  >
      
    </div>
  )
}

export default UpdateEvent