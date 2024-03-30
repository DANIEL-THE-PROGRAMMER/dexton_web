import Image from "next/image";
import { SearchIcon } from "../components/icons";
import { TableCard } from "../components/tablecard";
import { Faqs } from "../components/views/sections/faqs";

export default function Farms() {
  return (
    <div className="mx-[32px]">
      <div className="mt-[48px] flex items-center justify-between font-inter ">
        <div className="flex flex-col">
          <h3 className="text-tblack font-extrabold text-[50px] leading-[100%]">
            Farms
          </h3>
          <span className="w-[528px] mt-[16px] mb-[32px] text-tgrey1">
            Stake your LP tokens and earn TGR tokens in return. We incentivize
            many liquidity pairs by offering our Liquidity Providers best
            farming opportunities.
          </span>
          <button className="w-[148px] min-h-[50px] rounded-[8px] text-[15px] font-medium leading-[100%] bg-[#06F] text-white">
            Add project
          </button>
        </div>
        <Image src="/assets/girl-laptop.png" alt="" width={244} height={310} />
      </div>
      <div className="flex justify-between items-center mt-[36px]">
        <div className="flex items-center gap-[24px]">
          <div className="p-[6px] rounded-[12px] bg-[#EFF4FC] min-h-[44px] flex gap-[6px]">
            <div className="w-[108px] bg-white rounded-[8px] flex justify-center items-center">
              <span className="text-sm text-tblack font-medium leading-[100%]">
                Live
              </span>
            </div>
            <div className="min-h-[36px] w-[108px] rounded-[8px] flex justify-center items-center">
              <span className="text-sm text-tgrey1 font-medium leading-[100%]">
                Main
              </span>
            </div>
            <div className="min-h-[36px] w-[108px] rounded-[8px] flex justify-center items-center">
              <span className="text-sm text-tgrey1 font-medium leading-[100%]">
                Innovation
              </span>
            </div>
            <div className="min-h-[36px] w-[108px] rounded-[8px] flex justify-center items-center">
              <span className="text-sm text-tgrey1 font-medium leading-[100%]">
                GameFi
              </span>
            </div>
            <div className="min-h-[36px] w-[108px] rounded-[8px] flex justify-center items-center">
              <span className="text-sm text-tgrey1 font-medium leading-[100%]">
                Archive
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[8.1px]">
            <div className="min-h-[20px] flex justify-start bg-[#EFF4FC] w-[40px] rounded-[12px] p-[2px]">
              <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
            </div>
            <span className="leading-[100%] text-tgrey1 ">Staked only</span>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="min-h-[44px] bg-[#EFF4FC] flex justify-center items-center text-[15px] text-tblack font-inter font-medium leading-[100%] w-[82px] rounded-[8px] border-[1px] border-[#EFF4FC]">
            <span>All</span>
          </div>
          <div className="min-h-[44px] w-[284px] rounded-[8px] border-[1px] bg-[#EFF4FC] border-[#EFF4FC] px-[16px] flex gap-[24px] items-center">
            <SearchIcon />
            <input
              type="text"
              style={{ width: "calc(100% - 16px)" }}
              placeholder="Search Coins"
              className="text-sm bg-transparent outline-none border-none"
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-[12px] shadow-[0px_4px_24px_-12px_rgba(180,191,208,0.63] bg-white mt-[48px]">
        <TableCard />
      </div>
      <div className="flex items-center justiy-between mt-[82px] gap-[170px]">
        <Image src="/assets/planet.png" alt="" width={600} height={600} />
        <div className="flex flex-col" style={{ width: "calc(100% - 600px)" }}>
          <h3 className="text-tblack font-bold text-[32px] leading-[40px]">
            Launch Your Project on Toncoin Now!
          </h3>
          <span className="w-[528px] mt-[24px] mb-[32px] text-tgrey1">
            Tegro Launchpool and Farms are platforms that help project teams
            promote their token and get exposure to thousands of active Tegro
            users across the globe. We look for strong teams with clear and
            innovative vision in the crypto space. If you think you are one of
            the projects, do not wait any longer and apply below.
          </span>
          <button className="w-[181px] min-h-[50px] rounded-[8px] text-[15px] font-medium leading-[100%] bg-[#06F] text-white">
            Apply to Launch
          </button>
        </div>
      </div>
      <div className="">
        <Faqs />
      </div>
    </div>
  );
}
