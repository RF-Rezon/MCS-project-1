/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const UserSuggestions = ({ user }) => {
  const { id } = user;

  return (
    <Link to={`/${id}`}>
      <div className="flex gap-2 shadow-sm bg-slate-600  shadow-black pl-6 rounded-md py-1 text-white">
        <img src={user?.image} alt="" className="w-6 h-6 rounded-full" />
        <p>{user?.name}</p>
      </div>
    </Link>
  );
};

export default UserSuggestions;
