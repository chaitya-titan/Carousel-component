import React from "react";
import axios from "axios";

const Card = ({ title, imageUrl }) => {
  return (
    <div className="bg-gray-200 p-7 m-2 flex flex-col justify-center rounded-xl">
      <div className="">{title}</div>
      <img
        src={imageUrl}
        alt={title}
        className="w-52 h-36 object-cover rounded-lg mt-2"
      />
    </div>
  );
};

export default Card;
