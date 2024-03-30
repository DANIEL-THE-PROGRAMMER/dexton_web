import { Dispatch, SetStateAction } from "react";
import { Close } from "./icons";
import Image from "next/image";
import { Search } from "./icons";

export const TokenModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  if (!open) return null;

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black/[0.32] z-20 flex justify-center items-center">
      <div className="w-[526px] rounded-[12px] bg-white p-[32px] min-h-[406px]">
        <div className="flex justify-between items-center">
          <span className="text-tblack font-inter leading-[100%] font-meium text-[18px]">
            Select Token
          </span>
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            <Close />
          </span>
        </div>
        <div className="mt-[35px] mb-[16px] flex items-center min-h-[56px] border-[1px] border-[#E8EFFB] rounded-[8px] bg-[#FDFEFE] px-[16px] gap-[24px]">
          <Search />
          <input
            type="text"
            placeholder="Search name or paste address"
            style={{ width: "calc(100% - 24px)" }}
            className="bg-transparent outline-none border-none"
          />
        </div>
        <div className="flex gap-[8px] items-center">
          {Tokens.slice(0, 3).map((token, index) => {
            return (
              <div
                key={index}
                className="flex grow-[1] basis-[149px] justify-center gap-[8px] bg-[#FAFCFE] border-[1px] border-[#E8EFFB] rounded-[8px] min-h-[42px] text-tblack font-sm leading-[16px] uppercase font-inter items-center"
              >
                <Image src="" alt="" width={24} height={24} />
                <span>{token.name}</span>
              </div>
            );
          })}
        </div>
        <div className="font-inter text-[18px] font-medium leading-[100%] text-tblack mb-[16px] mt-[32px]">
          Token Name
        </div>
        <div className="flex flex-col">
          {Tokens.slice(3, Tokens.length).map((token, index) => {
            return (
              <div
                key={index}
                className="flex justify-between min-h-[56px] items-center"
              >
                <div className="flex gap-[16px] items-center">
                  <div className="w-[24px] h-[24px] bg-[#94A6C3]"></div>
                  <span className="text-tblack font-medium leading-[100%] text-sm font-inter">
                    {token.name}
                  </span>
                </div>
                <span className="text-tgrey1 leading-[12px] font-inter text-[12px]">
                  {token.fullname}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Tokens = [
  {
    name: "USDT",
    image: "",
    fullname: "",
  },
  {
    name: "TRON",
    image: "",
    fullname: "",
  },
  {
    name: "UNI",
    image: "",
    fullname: "",
  },
  {
    name: "1EARRTH",
    image: "",
    fullname: "EarthFund",
  },
  {
    name: "APE SWAP",
    image: "",
    fullname: "Aswap",
  },
  {
    name: "Avalanche avax",
    image: "",
    fullname: "Avax",
  },
  {
    name: "18c",
    image: "",
    fullname: "Block 18",
  },
  {
    name: "1EARTH",
    image: "",
    fullname: "EarthFund",
  },
  {
    name: "CoineBase",
    image: "",
    fullname: "Coinbase",
  },
  {
    name: "Doge coin",
    image: "",
    fullname: "Doge",
  },
];
