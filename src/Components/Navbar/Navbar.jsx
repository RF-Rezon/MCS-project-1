import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/image 1.png";
import HomeCover from "../HomeCover/HomeCover";

const Navbar = () => {
  return (
    <>
      <div className="max-w-full mx-32 gradient-bg">
        <div className="py-5 text-lg px-8 lg:px-0">
          <div className="block lg:hidden"></div>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-x-12">
              <div>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="font-bold hidden lg:block">
                <p className="flex items-center justify-center gap-x-2">
                  Solutions{" "}
                  <span>
                    <FaChevronDown fill="#0076CE" />
                  </span>
                </p>
              </div>
              <div className="font-bold hidden lg:block">
                <p className="flex items-center justify-center gap-x-2">
                  Features{" "}
                  <span>
                    <FaChevronDown fill="#0076CE" />
                  </span>
                </p>
              </div>
              <div className="font-bold hidden lg:block">
                <p>Blogs</p>
              </div>
              <div className="font-bold hidden lg:block">
                <p className="flex items-center justify-center gap-x-2">
                  About{" "}
                  <span>
                    <FaChevronDown fill="#0076CE" />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <button className="border-[1.5px] border-sky-600 px-4 py-1 rounded-[10px] text-sky-600 font-bold">
                <p className="text-base">Log In</p>
              </button>
              <button className="border-[1.5px] border-sky-600 text-white bg-sky-600 px-4 py-1 rounded-[10px] font-bold ">
                <p className="text-base">Register</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
