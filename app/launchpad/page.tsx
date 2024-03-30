import Image from "next/image";
import { SearchIcon } from "../components/icons";
import { HowToParticipate } from "../components/views/sections/participate";
import { Faqs } from "../components/views/sections/faqs";

export default function LaunchPad() {
  return (
    <div className="mx-[32px]">
      <div className="mt-[48px]">
        <div className="mt-[48px] flex items-center justify-between font-inter ">
          <div className="flex flex-col justify-center">
            <h3 className="text-tblack font-extrabold text-[50px] leading-[100%]">
              IDO Launchpad
            </h3>
            <span className="w-[328px] mt-[16px] mb-[32px] text-tgrey1">
              Buy new tokens directly for TGR. Maximize your profit by
              participating in the Initial DEX Offerings.
            </span>
            <button className="w-[148px] min-h-[50px] rounded-[8px] text-[15px] font-medium leading-[100%] bg-[#06F] text-white">
              Add project
            </button>
          </div>
          <Image
            src="/assets/girl-laptop.png"
            alt=""
            width={244}
            height={310}
          />
        </div>
        <div className="flex justify-between items-center mt-[36px]">
          <div className="flex items-center gap-[24px]">
            <div className="p-[6px] rounded-[12px] bg-[#EFF4FC] min-h-[44px] flex gap-[6px]">
              <div className="w-[108px] bg-white rounded-[8px] flex justify-center items-center">
                <span className="text-sm text-tblack font-medium leading-[100%]">
                  Latest
                </span>
              </div>
              <div className="min-h-[36px] w-[108px] rounded-[8px] flex justify-center items-center">
                <span className="text-sm text-tgrey1 font-medium leading-[100%]">
                  History
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[53px] flex gap-[26px]">
          <div className="grow-[1] basis-[414px] min-h-[416px] p-[24px] bg-white rounded-[12px]">
            <div className="flex items-center justify-between">
              <Image
                src="/assets/Frame 80.png"
                alt=""
                width={185}
                height={60}
              />
              <div className="w-[51px] min-h-[21px] flex justify-center items-center text-[11px] font-medium leading-[100%] text-[#27AE60] bg-[rgba(39,174,96,0.08)] rouded-[8px]">
                Ended
              </div>
            </div>
            <div className="mt-[16px] mb-[24px] text-sm leading-[22px] text-tblack">
              Meet a turn-based battle NFT game with a sustainable {"'"}Play to
              Earn{"'"} model, featuring different game modes such as Adventure,
              Battle or Dungeon.
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="grow-[1] flex min-h-[32px] rounded-[6px] bg-[#EFF4FC] justify-center items-center gap-[8px] text-tblack text-[12px]">
                <span>Website</span>
                <Image src="/assets/link.png" alt="" width={8} height={12} />
              </div>
              <div className="grow-[1] flex min-h-[32px] rounded-[6px] bg-[#EFF4FC] justify-center items-center gap-[8px] text-tblack text-[12px]">
                <span>Whitepaper</span>
                <Image src="/assets/link.png" alt="" width={8} height={12} />
              </div>
              <div className="grow-[1] flex min-h-[32px] rounded-[6px] bg-[#EFF4FC] justify-center items-center gap-[8px] text-tblack text-[12px]">
                <span>View contract</span>
                <Image src="/assets/link.png" alt="" width={8} height={12} />
              </div>
            </div>
          </div>
          <div className="grow-[1] basis-[414px] min-h-[416px]  relative bg-white rounded-[12px]">
            <Image
              src="/assets/questionmark.png"
              alt=""
              width={16}
              height={16}
              className="absolute top-[16px] right-[16px]"
            />
            <div className="p-[24px] flex gap-[16px]">
              <Image src="/assets/Group 44.png" alt="" width={62} height={50} />
              <div className="flex flex-col gap-[4px]">
                <span className="text-tblack font-bold text-[20px] leading-[100%]">
                  Basic Pool
                </span>
                <span className="text-tgrey1 text-[16px] font-medium leading-[100%]">
                  Deposit TGR - Get EXOS
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-[#E8EFFB] w-full"></div>
            <div className="px-[24px]">
              <div className="px-[10px] min-h-[36px] items-center gap-[8px] bg-[#F6FAFF] flex text-sm font-medium leading-[100%] text-tgrey1 mt-[24px] mb-[8px] rounded-[8px] w-[149px]">
                <Image src="/assets/tgr.png" alt="" width={20} height={20} />
                <span>Max: 250 TGR </span>
              </div>
              <div className="p-[16px] flex flex-col gap-[16px] border-[1px] border-[#E8EFFB] rounded-[8px]">
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Total raised:
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    $290 953
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Total raised (% of target):
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    116.4537%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Funds to raise:
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    $250 000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Token offered:
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    2 500 000 EXOS
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Price per EXOS
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    0.1194 BSW (~$0.1)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    BSW to burn:
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    ~$25 000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Total vesting time
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    4 months
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grow-[1] basis-[414px] min-h-[416px]  relative bg-white rounded-[12px]">
            <Image
              src="/assets/questionmark.png"
              alt=""
              width={16}
              height={16}
              className="absolute top-[16px] right-[16px]"
            />
            <div className="p-[24px] flex gap-[16px]">
              <Image src="/assets/Group 44.png" alt="" width={62} height={50} />
              <div className="flex flex-col gap-[4px]">
                <span className="text-tblack font-bold text-[20px] leading-[100%]">
                  Basic Pool
                </span>
                <span className="text-tgrey1 text-[16px] font-medium leading-[100%]">
                  Deposit TGR - Get EXOS
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-[#E8EFFB] w-full"></div>
            <div className="px-[24px]">
              <div className="px-[10px] min-h-[36px] items-center gap-[8px] bg-[#F6FAFF] flex text-sm font-medium leading-[100%] text-tgrey1 mt-[24px] mb-[8px] rounded-[8px] w-[149px]">
                <Image src="/assets/tgr.png" alt="" width={20} height={20} />
                <span>Max: 250 TGR </span>
              </div>
              <div className="p-[16px] flex flex-col gap-[16px] border-[1px] border-[#E8EFFB] rounded-[8px]">
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Total raised:
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    $290 953
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Total raised (% of target):
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    116.4537%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Funds to raise:
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    $250 000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Token offered:
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    2 500 000 EXOS
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Price per EXOS
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    0.1194 BSW (~$0.1)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    BSW to burn:
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    ~$25 000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#63707D] text-sm leading-[100%]">
                    Total vesting time
                  </span>
                  <span className="text-tblack text-sm font-medium leading-[100%]">
                    4 months
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HowToParticipate />
      <Faqs />
    </div>
  );
}
