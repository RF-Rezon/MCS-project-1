/* eslint-disable react/no-unescaped-entities */
import JoinUsCard from "./JoinUsCard";


const JoinUs = () => {
    return (
        <div className="lg:mt-20 mt-8 px-8 lg:px-0 min-h-screen">
           
           <div className="text-center">
            <p className="lg:text-6xl font-bold">Want to  <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple">Join</span> Us?</p>

            <div className="custom-bg">
                <p className="font-semibold text-slate-500 pt-6">To remain with us, it is essential that you diligently follow the steps provided</p>
                <div className="mt-20">
                <JoinUsCard/>
                </div>
                </div>
            </div>

            
            <p className="text-center mt-5 font-semibold">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="text-lg font-bold">every day </span>until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
          
        </div>
    );
};

export default JoinUs;