import Image from "next/image";
import { SearchIcon } from "./components/icons";
import { TokensCard } from "./components/tokenscard";
import { Faqs } from "./components/views/sections/faqs";
import { TermsOfUse } from "./components/views/sections/terms";

export default function Home() {
  return (
    <>
      <div className="px-[32px] pt-[96px] pb-[165px]">
        <div className="flex flex-col items-center font-inter gap-[24px] mb-[120px]">
          <h2 className="text-tblack font-extrabold leading-[100%] text-[50px]">
            Fixed Staking
          </h2>
          <h6 className="text-tgrey1 leading-[100%] text-[20px]">
            1st on TONCOIN DEX. Level up your crypto earn!
          </h6>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-[24px]">
          <div className="flex items-center gap-[24px] flex-wrap">
            <div className="p-[6px] rounded-[12px] bg-[#EFF4FC] min-h-[44px] flex gap-[6px]">
              <div className="w-[108px] bg-white rounded-[8px] flex justify-center items-center">
                <span className="text-sm text-tblack font-medium leading-[100%]">
                  Active
                </span>
              </div>
              <div className="min-h-[36px] w-[108px] rounded-[8px] flex justify-center items-center">
                <span className="text-sm text-tgrey1 font-medium leading-[100%]">
                  Inactive
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
          <div className="flex items-center gap-[16px] flex-wrap">
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
        <div className="mt-[24px] grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          <TokensCard />
          <TokensCard />
          <TokensCard />
          <TokensCard />
          <TokensCard />
          <TokensCard />
        </div>
        <Faqs />
        <TermsOfUse />
      </div>
    </>
  );
}
