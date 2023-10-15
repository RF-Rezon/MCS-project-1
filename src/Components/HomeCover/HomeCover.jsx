import { useState } from "react";
import left from "../../assets/Left.png";
import UserSuggestions from "./UserSuggestions";

const HomeCover = () => {
  const [results, setresults] = useState([]);

  const [Input, setInput] = useState("");

    let fetchData = async (value) => {
      try {
        const response = await fetch(`http://localhost:4003/ca?name=${value}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setresults(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }


  const handleChange = (value) => {
    setInput(value);
  };
  
  const onSearch = () => {
    fetchData(Input);
  };

  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center gradient-bg rounded-br-lg rounded-bl-lg  sm:flex-col md:flex-row ">
        <div className="mb-40">
          <div>
            <p className="lg:text-6xl font-bold mb-2">
              Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple">Partners</span> (CAs) available online
            </p>
            <div className="mt-4">
              <span className="font-semibold text-slate-600 text-lg pr-1">
                CONNECT
              </span>
              <span className="text-slate-500 text-xl font-normal">
                with us where your services are listed and visible to a myriad
                of businesses seeking CA’s for compliance support
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={Input}
                onChange={(e) => handleChange(e.target.value)}
                className="border border-slate-400 rounded-md w-full lg:w-2/3 mt-12 lg:h-12 text-xl pl-5 outline-none"
                placeholder="Search by name"
              />
           
              <button
                onClick={onSearch}
                type="submit"
                className="w-full mt-5 lg:mt-0 lg:h-12 text-xl border lg:w-32 bg-sky-600 text-white rounded-md lg:absolute top-12 lg:right-1/4"
              >
                <p className="font-bold text-base">Search</p>
              </button>
             
            </div>
            <div className="flex flex-col gap-y-3 px-8 lg:px-2 rounded-xl lg:opacity-75 lg:w-1/5 py-4 text-lg  font-semibold absolute">
              {results.map((user) => {
                return (
                  <div key={user.id} className="">
                    <UserSuggestions
                      user={user}
                      results={results}
                    ></UserSuggestions>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
          <div>
              <img src={left} alt="" className="mb-40" />
          </div>
    </div>
    </>
  );
};

export default HomeCover;
