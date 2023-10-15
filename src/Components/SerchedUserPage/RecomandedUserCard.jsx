/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";

const RecomandedUserCard = ({ user }) => {
  const {
    name,
    image,
    intro,
    price,
    rating,
    reviewCount,

    testimonial,
    deliveryTime,
    about,
  } = user;
  return (
    <div className="shadow-md shadow-slate-300 pb-8 rounded-xl">
      <div>
        <img src={image} className="h-full w-full" />
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center pt-4">
          <span className="lg:text-2xl font-bold">{name}</span>
          <span className="font-bold lg:text-2xl">{price}</span>
        </p>
        <p className="my-4 font-serif">{intro}</p>
        <div className="flex gap-2 font-bold">
          <div className="flex items-center space-x-2">
            <FaStar fill="#0076CE" />
            <p className="text-custom-blue2">{rating}</p>
          </div>
          <p>({reviewCount})</p>
        </div>
        <div>
          <button className="border-2 w-full mt-5 border-sky-600 text-white bg-sky-600 px-4 py-2 rounded-lg font-semibold ">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecomandedUserCard;
