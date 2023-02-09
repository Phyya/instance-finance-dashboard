import { useEffect, useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import calendar from "../assets/images/calendar.svg";
import squiggly from "../assets/images/squiggly.svg";
import Header from "../components/Header";
import Savings from "../components/Savings";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Wallets from "../components/Wallets";
import useMediaQuery from "../hooks/useMediaQuery";
import { formatDate, getGreeting } from "../utils/functions";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const divRef = useRef<HTMLDivElement>(null);
  const [greetingWidth, setGreetingWidth] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(!isMobile);
  const [wallets, setWallets] = useState<boolean>(true);

  useEffect(() => {
    setWallets(true);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setGreetingWidth(divRef.current?.offsetWidth || 0);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header setSidebar={() => setOpen(false)} />
      <div className="bg-app-color w-full flex">
        <Sidebar open={open} close={(val: boolean) => setOpen(val)} />

        <div
          className={`w-full  ${
            open ? "pl-72 max-[900px]:w-auto" : "pl-3"
          } mt-16 px-4 pb-12`}
        >
          <h1 className="text-2xl sm:text-3xl font-bold my-4 mt-14">
            Overview
          </h1>
          <div
            className={`flex justify-between gap-10 px-25 py-55 md:overflow-x-unset  ${
              !open ? "flex  w-full " : undefined
            }`}
          >
            <div className="w-[65%]  max-[900px]:w-full h-full bg-white rounded-xl px-6">
              <div
                ref={divRef}
                className={`max-[450px]:text-xs text-white bg-primary-blue h-[118px] flex items-center justify-between px-5 my-5 bg-no-repeat bg-right rounded-lg ${
                  greetingWidth <= 540 && "flex-col !items-start py-5 h-[160px]"
                } `}
                style={{ backgroundImage: `url(${squiggly})` }}
              >
                <div className="flex flex-col">
                  <p className="flex gap-2 items-center">
                    <img src={calendar} alt="calendar" />
                    <span>{formatDate(new Date())}</span>
                  </p>
                  <p className="text-2xl font-bold">{getGreeting()}</p>
                </div>
                <button className="outline-0 bg-primary-green p-2 rounded-md flex items-center px-4">
                  <IoMdAddCircleOutline className="text-xl  mr-2" />
                  Create New Wallet
                </button>
              </div>
              <div>
                <div className="flex justify-between w-full md:w-[95%]">
                  <h1
                    onClick={() => setWallets(true)}
                    className={` flex justify-between cursor-pointer px-3  min-[901px]:w-full  ${
                      isMobile &&
                      wallets &&
                      "border-b-[3px] border-primary-green"
                    }`}
                  >
                    <span className="flex items-center gap-3 text-xl sm:text-2xl font-bold">
                      Wallets
                    </span>
                    {!isMobile && (
                      <span className="pl-3 flex text-primary-green items-center text-xl font-bold gap-2">
                        <IoMdAddCircleOutline />
                        Fund wallet
                      </span>
                    )}
                  </h1>
                  {isMobile && (
                    <h1
                      onClick={() => setWallets(false)}
                      className={`pl-3 cursor-pointer   ${
                        isMobile &&
                        !wallets &&
                        "border-b-[3px] border-primary-green"
                      }`}
                    >
                      <span className="pr-3 flex items-center gap-3 text-xl sm:text-2xl font-bold">
                        Savings
                      </span>
                    </h1>
                  )}
                </div>
                {wallets ? (
                  <div>
                    <Wallets />
                    <Table />
                  </div>
                ) : (
                  <Savings />
                )}
              </div>
            </div>
            {!isMobile && <Savings />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
