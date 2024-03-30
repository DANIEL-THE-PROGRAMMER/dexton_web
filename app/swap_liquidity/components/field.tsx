"use client";

import Image from "next/image";
import { OptionVertical } from "@/app/components/icons";
import { Dispatch, SetStateAction, useState } from "react";
import { TokenModal } from "@/app/components/tokenmodal";

export const Field = ({
  max,
  image,
  num,
  abb,
  setNum,
  liq,
}: {
  max?: boolean;
  image: string;
  num: any;
  abb: string;
  setNum: Dispatch<SetStateAction<number | string>>;
  liq?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TokenModal open={open} setOpen={setOpen} />
      <div className="flex justify-between">
        <div className="flex items-end text-sm font-medium leading-[100%]">
          <span className="text-tblack">For:</span>
          <span className="text-tgrey1">TON</span>
        </div>
        {liq && (
          <div className="flex items-center gap-[12px]">
            <span className="text-tgrey1 text-[12px]">Balance:</span>
            <span className="text-tblack">560.05069 TGR</span>
          </div>
        )}
        {!liq && (
          <div className="flex flex-col items-end">
            <span className="text-tgrey1 text-[12px]">Balance:</span>
            <span className="text-tblack">560.05069 TGR</span>
          </div>
        )}
      </div>
      <div className="min-h-[50px] mt-[8px] rounded-[10px] border-[1px] border-lblue1 bg-[#FCFDFE] flex justify-between items-center p-[8px]">
        <div className="flex items-center gap-[16px]">
          <div
            className="flex bg-lblue2 min-h-[42px] w-[124px] justify-center items-center gap-[16px] rounded-[8px] cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            <div className="w-[24px] h-[24px] relative">
              <Image src={`${image}`} alt="" fill sizes="100%" />
            </div>
            <span className="text-sm font-medium leading-[16px]">{abb}</span>
            <span>
              <OptionVertical />
            </span>
          </div>
          <input
            className="text-lg text-tgrey1 font-medium uppercase leading-[16px] border-none outline-none bg-transparent flex grow-[1]"
            type="text"
            placeholder="0"
            value={num}
            onChange={(e: any) => setNum(e.target.value)}
          />
        </div>
        {max && (
          <button className="w-[58px] min-h-[30px] border-[1px] border-[rgba(0,102,255,0.08)] rounded-[8px] bg-[rgba(0,102,255,0.08)] justify-center items-center text-dblue2 font-inter text-[12px] leading-[100%]">
            Max
          </button>
        )}
      </div>
    </div>
  );
};
