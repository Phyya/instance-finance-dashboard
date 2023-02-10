import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import savings from "../assets/images/savings.svg";

const data = [
  {
    amt: 1000,
    status: "Processing",
  },
  {
    amt: 1000,
    status: "Completed",
  },
  {
    amt: 1000,
    status: "Completed",
  },
  {
    amt: 1000,
    status: "Completed",
  },
];
const Savings = () => {
  const [ongoing, setOngoing] = useState(true);
  return (
    <div className="bg-white w-96 max-[900px]:w-full md:px-7 rounded-xl ">
      <h1 className="max-[900px]:hidden my-2 font-bold text-xl">Savings</h1>
      <div className="flex min-[900px]:flex-col border justify-between p-4 rounded-xl mt-3 items-center max-[500px]:flex-col max-[500px]:items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={savings} alt="piggy-bank" className="w-[50px] h-[50px]" />
            <span className="whitespace-nowrap font-bold">Gold Savings</span>
          </div>
          <div className="flex gap-10 my-5 px-2">
            <span className="font-bold">567.8744</span>
            <span>$135.25</span>
          </div>
        </div>
        <button className="outline-0 bg-primary-green p-2 px-4 w-[150px] flex items-center text-white gap-1 rounded-lg min-[900px]:m-auto">
          View Savings <MdArrowForwardIos />
        </button>
      </div>
      <h1 className="mt-6 text-2xl font-bold whitespace-nowrap ">
        Real-time Assistant
      </h1>
      <div>
        <div className="flex justify-between mt-3 w-[70%] md:w-[90%] max-[450px]:w-full">
          <h2
            className={`cursor-pointer  ${
              ongoing &&
              "border-b-2 border-primary-blue text-primary-blue font-bold"
            }`}
            onClick={() => setOngoing(true)}
          >
            On-going Tx
          </h2>
          <h2
            className={`cursor-pointer  ${
              !ongoing &&
              "border-b-2 border-primary-blue text-primary-blue font-bold"
            }`}
            onClick={() => setOngoing(false)}
          >
            Authorize Tx
          </h2>
        </div>
        <div className="mt-5">
          {data.map((d) => (
            <div className="flex shadow-sm my-3 py-2 px-1 justify-between items-center">
              <div className="flex flex-col">
                <p className="font-bold">${d.amt}</p>
                <p>{d.status}</p>
              </div>

              <span
                className={`rounded-full w-[12px] h-[12px] ${
                  d.status == "Completed" ? "bg-[#44CF95]" : "bg-[#F55F0A]"
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Savings;
