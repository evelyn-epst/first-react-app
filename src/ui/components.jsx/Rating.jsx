import React from "react";
import { FiStar } from "react-icons/fi";

function Rating() {
  return (
    <div className="flex">
      <FiStar className="hover:text-red-300" />
      <FiStar className="hover:text-red-300" />
      <FiStar className="hover:text-red-300" />
      <FiStar className="hover:text-red-300" />
      <FiStar className="hover:text-red-300" />
    </div>
  );
}

export default Rating;
