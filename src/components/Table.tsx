import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

const data = [
  {
    ref: "1234MT",
    description: "For Children School Fees",
    amt: "0.00",
    date: new Date().toDateString(),
    status: "Completed",
    arrow: <AiOutlineArrowUp />,
  },
  {
    ref: "1234MT",
    description: "For Children School Fees",
    amt: "0.00",
    date: new Date().toDateString(),
    status: "Pending",
    arrow: <AiOutlineArrowDown />,
  },
  {
    ref: "1234MT",
    description: "For Children School Fees",
    amt: "0.00",
    date: new Date().toDateString(),
    status: "Completed",
    arrow: <AiOutlineArrowUp />,
  },
  {
    ref: "1234MT",
    description: "For Children School Fees",
    amt: "0.00",
    date: new Date().toDateString(),
    status: "Pending",
    arrow: <AiOutlineArrowDown />,
  },
];

const Table = () => {
  const headers: string[] = [" ", "Reference", "Amount", "Description", "Date"];

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h1 className="text-xl sm:text-2xl font-bold">Transaction Records</h1>
        <p className="text-primary-blue flex items-center gap-3 cursor-pointer">
          <span className="sm:block hidden">See All Transactions</span>
          <MdArrowForwardIos />
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="mt-0 w-full border-separate border-spacing-y-6">
          <thead>
            <tr className="font-medium">
              {headers.map((row) => {
                return (
                  <td key={row} className="px-[0.5em]">
                    {row}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-gray-text">
            {data.map((row) => (
              <tr className="px-[0.5em]">
                <td
                  data-label=" "
                  className={` min-[600px]:flex hidden p-3  rounded-full h-10 w-10 items-center justify-center  ${
                    row.status == "Completed" ? "bg-[#fff1f1]" : "bg-[#f2fff9]"
                  } ${
                    row.status == "Completed"
                      ? "text-[#fd7c7c]"
                      : "text-secondary-green"
                  }`}
                >
                  {row.arrow}
                </td>
                <td
                  data-label="Reference"
                  className="text-secondary text-black font-medium  px-[0.5em] "
                >
                  REF:{row.ref}
                </td>
                <td data-label="Amount" className="text-secondary  px-[0.5em] ">
                  {row.amt}
                </td>
                <td
                  data-label="Description"
                  className="text-[13px] whitespace-normal max-[1200px]:whitespace-nowrap text-secondary  px-[0.5em] "
                >
                  {row.description}
                </td>
                <td
                  data-label="Date"
                  className="text-[13px] text-secondary whitespace-normal max-[1200px]:whitespace-nowrap px-[0.5em] "
                >
                  {row.date}
                </td>
                <td
                  className={`text-secondary text-center text-xs sm:mx-2 rounded-md font-medium  flex items-center justify-center ml-auto !p-1 !py-2 h-[30px] !w-[100px] ${
                    row.status == "Completed" ? "bg-[#f2fff9]" : "bg-[#ffe4c2]"
                  } ${
                    row.status == "Completed"
                      ? "text-secondary-green"
                      : "text-[#EF8E19]"
                  }`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
