/* eslint-disable react/no-unescaped-entities */
import icon from "../../assets/Group 34830.png";
import logo from "../../assets/image 1.png";
const Footer = () => {
  return (
    <>
      <div className="footer-gradient lg:mt-24  pt-20 pb-10 z-50 px-6">
        <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-0">
          <div>
            <div>
              <img src={logo} alt="" />
            </div>
            <p className="text-white font-normal">
              India's first platform dedicated to simplifying partner search
            </p>
          </div>
          <div className="text-white flex flex-col gap-y-2 mx-auto">
            <p className="font-bold">COMPANY</p>
            <p>About </p>
            <p>Pricing</p>
            <p>Careers</p>
          </div>
          <div className="text-white flex flex-col gap-y-2 mx-auto">
            <p className="font-bold">SOLUTIONS</p>
            <p>Search</p>
            <p>Connect</p>
            <p>Research</p>
            <p>Academy</p>
          </div>
          <div className="text-white flex flex-col gap-y-2 mx-auto">
            <p className="font-bold">RESOURCES</p>
            <p>Blogs</p>
            <p>Forms</p>
          </div>
          <div className="text-white flex flex-col gap-y-2 mx-auto">
            <p className="font-bold">SUPPORT</p>
            <p>Blogs</p>
            <p>Forms</p>
          </div>
          <div className="text-white flex flex-col gap-y-2 mx-auto">
            <p className="font-bold">LEGAL</p>
            <p>Help</p>
            <p>Contact Us </p>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex justify-between mt-8 items-center">
          <div>
            <p className="text-white font-normal">
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
          </div>
          <div>
            <img src={icon} alt="" className="p-2 rounded-xl" />
          </div>
        </div>
      </div>
      <div className="bg-black h-full py-4">
        <p className="text-white font-normal text-center">
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
