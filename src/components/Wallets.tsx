import { IoMdAddCircleOutline } from "react-icons/io";
import wallet_logo from "../assets/images/wallet_logo.svg";
import ngr_flag from "../assets/images/ngr_flag.svg";
import usa_flag from "../assets/images/usa_flag.svg";
import dotted_line from "../assets/images/dotted_line.svg";

const wallets = [
  {
    balance: "5,000,048",
    type: "USDT",
    rate: "548",
    flag: ngr_flag,
    country: "Nigeria",
    bgColor: "#E0E5FF",
  },
  {
    balance: "5,000,048",
    type: "USDT",
    rate: "548",
    flag: usa_flag,
    country: "USA",
    bgColor: "#FFEEC5",
  },
  {
    balance: "5,000,048",
    type: "USDT",
    rate: "548",
    flag: usa_flag,
    country: "USA",
    bgColor: "#E0E5FF",
  },
];
const Wallets = () => {
  return (
    <div>
      <button className="outline-0 bg-primary-green p-2 rounded-md flex items-center px-4 ml-auto mr-3 text-white min-[900px]:hidden my-3">
        <IoMdAddCircleOutline className="text-xl  mr-2 " />
        Fund Wallet
      </button>
      <div
        className="
    flex gap-5
    py-5
    overflow-x-auto"
      >
        {wallets.map((w) => (
          <div
            style={{
              backgroundColor: w.bgColor,
              boxShadow: `1px 13px 16px ${w.bgColor} `,
            }}
            className={`min-w-[250px] w-[300px] rounded-xl p-6`}
          >
            <div className="flex items-center gap-2">
              <img src={wallet_logo} alt="wallet" />
              <p className="flex gap-3 mt-2">
                <span className="font-bold">${w.rate}</span>
                <span>USDT</span>
              </p>
            </div>
            <img src={dotted_line} alt="dotted line" className="mt-6 mb-4" />
            <h2>Balance</h2>
            <p className="font-bold text-xl">${w.balance}</p>

            <p className="flex mt-8 mb-3 gap-2">
              <img src={w.flag} alt="flag" />
              <span>{w.country}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallets;
