const JoinUsCard = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
      <div className="relative">
        <div className="absolute footer-bg p-3 rounded-xl top-0 left-5">
          <span className="text-xl font-bold text-white gradient-tooltip p-2 rounded-[10px]">
            1<sup>st</sup>
          </span>
        </div>
        <div className="shadow-md shadow-slate-400 px-6 py-12 lg:mx-10 rounded-xl bg-white">
          <div className="text-center">
            <p className="text-lg font-bold">Commencement of business </p>
            <p className="font-normal mt-2">
              Invested shareholders must confirm payment and office address
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-1 flex justify-between mt-4 lg:px-6 py-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-sky-600 text-left">Due date</p>
              <p className="text-left">Within 180 days</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-red-600 text-left">Penalty fees</p>
              <p className="text-left">₹50,000 for the company</p>
              <p className="text-left">₹1,000 /day for directors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute footer-bg p-3 rounded-xl top-0 left-5">
          <span className="text-xl font-bold text-white gradient-tooltip p-2 rounded-[10px]">
            2<sup>nd</sup>
          </span>
        </div>
        <div className="shadow-md shadow-slate-400 px-6 py-12 lg:mx-10 rounded-xl bg-white">
          <div className="text-center">
            <p className="text-lg font-bold">Auditor Appointment</p>
            <p className="font-normal mt-2">
              Company informs new auditor and submits ADT.1 form to ROC.
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-1 flex justify-between mt-4 lg:px-6 py-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-sky-600 text-left">Due date</p>
              <p className="text-left">Within 30 days</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-red-600 text-left">Penalty fees</p>
              <p className="text-left">₹300 per month.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute footer-bg p-3 rounded-xl top-0 left-5">
          <span className="text-xl font-bold text-white gradient-tooltip p-2 rounded-[10px]">
            3<sup>rd</sup>
          </span>
        </div>
        <div className="shadow-md shadow-slate-400 px-6 py-12 lg:mx-10 rounded-xl bg-white">
          <div className="text-center">
            <p className="text-lg font-bold">DIN eKYC</p>
            <p className="font-normal mt-2">
              Directors share personal information for identification &
              verification
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-1 flex justify-between mt-4 lg:px-6 py-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-sky-600 text-left">Due date</p>
              <p className="text-left">Every Year</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-red-600 text-left">Penalty fees</p>

              <p className="text-left">₹5000 one time</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute footer-bg p-3 rounded-xl top-0 left-5">
          <span className="text-xl font-bold text-white gradient-tooltip p-2 rounded-[10px]">
            4<sup>th</sup>
          </span>
        </div>
        <div className="shadow-md shadow-slate-400 px-6 py-12 lg:mx-10 rounded-xl bg-white">
          <div className="text-center">
            <p className="text-lg font-bold">DPT-3</p>
            <p className="font-normal mt-2">
              Companies report money taken from people to ROC; auditors confirm
              details.
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-1 flex justify-between mt-4 lg:px-6 py-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-sky-600 text-left">Due date</p>
              <p className="text-left">Within 30 days </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-red-600 text-left">Penalty fees</p>

              <p className="text-left">₹300 per month.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute footer-bg p-3 rounded-xl top-0 left-5">
          <span className="text-xl font-bold text-white gradient-tooltip p-2 rounded-[10px]">
            5<sup>th</sup>
          </span>
        </div>
        <div className="shadow-md shadow-slate-400 px-6 py-12 lg:mx-10 rounded-xl bg-white">
          <div className="text-center">
            <p className="text-lg font-bold">MCA Form AOC-4</p>
            <p className="font-normal mt-2">
              It's like an official report card for a company's documents
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-1 flex justify-between mt-4 lg:px-6 py-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-sky-600 text-left">Due date</p>
              <p className="text-left">On or Before 30th November</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-red-600 text-left">Penalty fees</p>
              <p className="text-left">₹200 per day (No upper limit)*</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute footer-bg p-3 rounded-xl top-0 left-5">
          <span className="text-xl font-bold text-white gradient-tooltip p-2 rounded-[10px]">
            6<sup>th</sup>
          </span>
        </div>
        <div className="shadow-md shadow-slate-400 px-6 py-12 lg:mx-10 rounded-xl bg-white">
          <div className="text-center">
            <p className="text-lg font-bold">MCA Form MGT-7</p>
            <p className="font-normal mt-2">
              Companies must annually report activities and finances to the
              registrar.
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-1 flex justify-between mt-4 lg:px-6 py-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-sky-600 text-left">Due date</p>
              <p className="text-left">On or Before 31st December</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-red-600 text-left">Penalty fees</p>
              <p className="text-left">₹200 per day (No upper limit)* </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default JoinUsCard;
