import React from "react";
import axios from "axios";

const Card = ({ title, imageUrl }) => {
  return (
    <div className="bg-gray-200 p-4 m-2 flex flex-col justify-center rounded-xl">
      <div className="">{title}</div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-36 object-cover rounded-lg mt-2"
      />
    </div>
  );
};

export default Card;
