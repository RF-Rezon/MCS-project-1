/* eslint-disable react/no-unescaped-entities */
import icon1 from "../../assets/Chat-bubble (1).png";
import icon2 from "../../assets/Chat-bubble.png";
import icon3 from "../../assets/Row (1).png";
import icon4 from "../../assets/Row (2).png";
import icon5 from "../../assets/Row.png";
import man1 from "../../assets/Teacher.png";
import man from "../../assets/boy.png";
import img1 from "../../assets/icon-park-twotone_degree-hat.png";
import img2 from "../../assets/icon-park-twotone_enquire.png";
import img3 from "../../assets/icon-park-twotone_search.png";
import img4 from "../../assets/icon-park-twotone_table-report.png";
const AllInOne = () => {
  return (
    <div className="mt-28 mb-96 lg:mb-60 px-8 lg:px-0">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <p className="lg:text-6xl text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple">All-in-One</span> platform that Makes Easier
          </p>

          <p className="text-2xl font-normal mt-5">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>

          <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 gap-10 text-lg font-semibold">
            <div className=" flex items-center gap-2">
              <div>
                <img src={img1} alt="" />
              </div>
              <p className="text-black">
                <span className="font-bold">SEARCH</span> for vital
                company information{" "}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={img2} alt="" />
              </div>
              <p className="text-black">
                <span className="font-bold">CONNECT</span> with the
                resources to meet your business needs
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={img3} alt="" />
              </div>
              <p className="text-black">
                <span className="font-bold">RESEARCH</span> and
                generate reports that drive growth{" "}
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <div>
                <img src={img4} alt="" />
              </div>
              <p className="text-black">
                <span className="font-bold">ACADEMY</span> to give
                you the skills for success in your career
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-16 lg:mt-0 relative">
          <div className="">
            <div className="absolute right-0 z-20  mt-20 lg:mt-0">
              <img src={man} alt="" className=" " />
            </div>
            <div className="absolute flex flex-col gap-6 right-40 font-semibold">
              <div className="relative">
                <img src={icon5} alt="" />
                <p className="absolute top-1 left-2  ">
                  Hey, check out loreumipsum services.{" "}
                </p>
              </div>
              <div className="relative">
                <img src={icon2} alt="" />
                <p className="absolute top-1 left-2  ">
                  I learned from their videos, got my first job.{" "}
                </p>
              </div>
              <div className="relative">
                <img src={icon3} alt="" />
                <p className="absolute top-1 left-2  ">
                  You won't be disappointed with .{" "}
                </p>
              </div>
              <div className="relative">
                <img src={icon4} alt="" />
                <p className="absolute top-1 left-2  ">
                  I got a perfect analysis report from{" "}
                </p>
              </div>
              <div className="relative">
                <img src={icon1} alt="" />
                <p className="absolute top-1 left-2  ">Oh, that's great. </p>
              </div>
            </div>
          </div>

          <div className="absolute lg:top-56  hidden lg:block">
            <img src={man1} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
