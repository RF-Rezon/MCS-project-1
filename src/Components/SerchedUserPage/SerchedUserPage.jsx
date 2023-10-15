import { FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import img from "../../assets/Group 35375.png";
import Recomandated from "./Recomandate";
import Services from "./Services";

const SerchedUserPage = () => {
  const data = useLoaderData();
  const {
    name,
    intro,
    price,
    rating,
    reviewCount,
    testimonial,
    deliveryTime,
    about,
  } = data;
  return (
    <>
      <div className="flex sm:flex-col md:flex-row gap-6 items-center justify-between lg:mt-20 mt-5 px-8 lg:px-0">
        <div>
          <div className="flex flex-col gap-y-2">
            <p className="lg:text-4xl text-2xl font-bold">{name}</p>
            <p className="text-lg font-normal">{intro}</p>
          </div>

          <div className="flex space-x-2 mt-6 font-bold">
            <div className="flex items-center space-x-2">
              <FaStar fill="#0076CE" />
              <p className="text-custom-blue2">{rating}</p>
            </div>
            <p>({reviewCount})</p>
          </div>
          <div className="shadow-md shadow-slate-300 text-xl px-12 py-8 mt-10 mx-left mr-20 rounded-xl ">
            <p className="flex justify-between">
              <span>Basic To Complex Task</span>
              <span className="font-bold">{price}</span>
            </p>
            <div className="flex items-center space-x-3 py-3">
              <FaRegCalendarAlt fill="#0076CE" />
              <p className="">{deliveryTime}</p>
            </div>
            <div className="flex justify-between mt-5 gap-x-2">
              <button className="border-2 border-sky-600 text-white bg-sky-600 px-4 py-3 rounded-lg font-semibold text-sm">
                Request Proposal
              </button>
              <button className="border-2 border-sky-600 px-4 py-3 rounded-lg text-sky-600 font-semibold text-sm">
                Chat With Me
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-slate-300 text-xl px-12 py-8 mt-10 mx-left mr-20  rounded-xl relative lg:h-72">
            <p className="lg:text-4xl font-bold">What people say?</p>
            <p className="text-lg font-normal mt-8">{testimonial?.text}</p>
            <div className="absolute bottom-5 left-1/3 flex gap-2">
              <div className="h-2 w-5 rounded-full bg-sky-500"></div>
              <div className="h-2 w-2 rounded-full bg-slate-300"></div>
              <div className="h-2 w-2 rounded-full bg-slate-300"></div>
              <div className="h-2 w-2 rounded-full bg-slate-300"></div>
            </div>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="mt-14 lg:mt-0">
            <img src={img} alt="" />

            <div className="mt-5">
              <p className="lg:text-4xl font-bold">About {name}</p>
            </div>
            <div className="flex sm:flex-col md:flex-row gap-x-20 font-bold mt-10">
              <div className="flex flex-col gap-y-4">
                <p className="text-slate-400">FROM</p>
                <p>{about?.from}</p>
              </div>
              {/*  */}
              <div className="flex flex-col gap-y-4">
                <p className="text-slate-400">PARTNER SINCE</p>
                <p>{about?.partnerSince}</p>
              </div>
              {/*  */}
              <div className="flex flex-col gap-y-4">
                <p className="text-slate-400">AVERAGE RESPONSE TIME</p>
                <p>{about?.averageResponseTime}</p>
              </div>
            </div>
            <div className="lg:mt-20">
              <p className="text-slate-400 font-bold">About</p>
              <p className="text-xl font-normal mt-2">
                {about?.description}. {intro}
              </p>
            </div>
            <div className="lg:mt-20 ">
              <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="text-xl font-semibold mt-2 ">
                  <p className="text-slate-400 font-bold">Services</p>
                  <div className="mt-5">
                    {about?.services?.map((service) => {
                     return <Services key={service.id} service={service} />;
                    })}
                  </div>
                </div>
                <div className="text-xl font-semibold mt-2">
                  <p className="text-slate-400 font-bold">Why Me</p>
                  <div className="mt-5">
                    {about?.benefits?.map((service) => {
                      return <Services key={service.id} service={service} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Recomandated />
      </div>
    </>
  );
};

export default SerchedUserPage;
