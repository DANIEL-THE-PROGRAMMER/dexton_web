
import { Button } from "./button";
import { Clock, Share } from "./icons";
import Image from "next/image";

export const TokensCard = () => {
  return (
    <div className="relative bg-[#FDFEFF] rounded-[12px]">
      <div className="absolute top-[8px] right-[8px] bg-[rgba(0,102,255,0.08)] flex min-h-[37px] w-[108px] rounded-[12px]  gap-[6px] items-center justify-center font-inter font-medium leading-[100%] text-[#0066FF]">
        <Clock color="#0066FF" />
        <span>30 days</span>
      </div>
      <div className="p-[24px] flex flex-col">
        <div className="flex gap-[24px] items-center">
          <Image src="" alt="" width={50} height={50} />
          <div className="flex flex-col font-inter">
            <span className="text-[#141A21] font-bold leading-[100%] text-[20px]">
              Earn TGR
            </span>
            <span className="text-[16px] font-medium text-[#63707D]">
              Stake APY 2.73%
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] mt-[24px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[6px]">
              <span>Total Stake</span>
              <Clock color="#63707D" />
            </div>
            <span className="text-[#141A21] font-medium text-sm leading-[100%]">
              547.88 / 1000
            </span>
          </div>
          <div className="h-[8px] bg-[#EFF4FC] rounded-[100px]">
            <div className="w-[193px] bg-[#27AE60] h-full rounded-[100px]"></div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#E8EFFB]"></div>
      <div className="p-[24px] font-inter">
        <div className="flex justify-between">
          <span className="text-sm leading-[100%] text-tgrey1">
            Total stake per user:
          </span>
          <span className="font-medium text-sm leading-[100%] text-tblack">
            250 TGR
          </span>
        </div>
        <div className="mt-[16px] mb-[24px] rounded-[8px] bg-[#F6FAFF] flex flex-col gap-[16px] p-[16px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-[8px] place-items-center">
              <span className="text-sm leading-[100%] text-tgrey1">
                Earned TGR
              </span>
              <div className="min-h-[27px] w-[71px] bg-[rgba(244,66,66,0.05)] text-[#EB5757] font-bold text-[11px] leading-[100%] items-center text-center flex rounded-[8px] justify-center">
                Not active
              </div>
            </div>
            <button className="flex border-[1px] border-[#27AE60] bg-[#27AE60]/[0.6] min-h-[32px] w-[88px] text-center text-white justify-center items-center rounded-[8px]">
              Harvest
            </button>
          </div>
          <div className="flex justify-between">
            <span className="text-[#63707D] text-sm leading-[100%] font-inter">
              Overview
            </span>
            <div className="flex items-center gap-[8px] text-sm leading-[100%] text-[#06F]">
              <span className="">View contract</span>
              <Share />
            </div>
          </div>
        </div>
        <div className="mb-[16px]">
          <Button
            text="Approve TGR"
            icon={<Image src="/assets/tgr.png" alt="" width={24} height={24} />}
          />
        </div>
        <div className="text-center text-sm text-tgrey1 leading-[24px]  font-inter">
          1.99% unstaking fee if withdrawn within 30d
        </div>
      </div>
    </div>
  );
};
