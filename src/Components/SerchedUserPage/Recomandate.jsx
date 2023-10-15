import { useEffect, useState } from "react";
import RecomandedUserCard from "./RecomandedUserCard";

const Recomandated = () => {
  const [User, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4003/ca/")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="px-8 lg:px-0 mt-12 lg:mt-0">
      <p className="lg:text-4xl font-bold lg:mt-32 text-2xl">
        Recommended for you
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
        {User.slice(0, 3).map((user) => {
          return (
            <RecomandedUserCard user={user} key={user.id}></RecomandedUserCard>
          );
        })}
      </div>
    </div>
  );
};

export default Recomandated;
