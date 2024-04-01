import Image from "next/image";

export const TableCard = () => {
  return (
    <div className="flex items-center font-inter min-h-[82px] px-[24px] justify-between overflow-auto">
      <div className="shrink-0 basis-[60px] flex justify-center items-center mr-[24px]">
        <div className="rounded-[8px] basis-[51px] bg-[rgba(244,66,66,0.05)] min-h-[20px] text-[#EB5757] text-[11px] font-bold leading-[100%] flex items-center justify-center ">
          Hot
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-[16px] basis-[138px] grow-[3]">
        <Image src="/assets/icont-box.png" alt="" width={57} height={42} />
        <span className="text-tbalck font-semibold leading-[100%] capitalize text-sm">
          TON-TGR
        </span>
      </div>
      <div className="shrink-0 flex flex-col basis-[88px] gap-[8px] grow-[1]">
        <div className="flex items-center gap-[4px]">
          <span className="text-[12px] font-medium leading-[100%] text-tgrey1">
            APR
          </span>
          <Image src="/assets/questionmark.png" alt="" width={13} height={11} />
        </div>
        <div className="flex items-center gap-[7px]">
          <span className="text-tblack font-semibold capitalize leading-[100%] text-sm ">
            29.52%
          </span>
          <Image src="/assets/questionmark.png" alt="" width={15} height={13} />
        </div>
      </div>
      <div className="shrink-0 flex flex-col basis-[88px] gap-[8px] grow-[1]">
        <div className="flex items-center gap-[4px]">
          <span className="text-[12px] font-medium leading-[100%] text-tgrey1 ">
            APY
          </span>
        </div>
        <div className="flex items-center gap-[7px]">
          <span className="text-tblack font-semibold capitalize leading-[100%] text-sm ">
            34.34%
          </span>
          <Image src="/assets/im.png" alt="" width={15} height={13} />
        </div>
      </div>
      <div className=" shrink-0 flex flex-col basis-[88px] gap-[8px] grow-[1]">
        <div className="flex items-center gap-[4px]">
          <span className="text-[12px] font-medium leading-[100%] text-tgrey1">
            Liquidity{" "}
          </span>
        </div>
        <div className="flex items-center gap-[7px]">
          <span className="text-tblack font-semibold capitalize leading-[100%] text-sm ">
            $5 380 601
          </span>
          <Image src="/assets/questionmark.png" alt="" width={15} height={13} />
        </div>
      </div>
      <div className="shrink-0 flex flex-col basis-[88px] gap-[8px] grow-[1] justify-center ml-[60px]">
        <div className="flex items-center gap-[4px]">
          <span className="text-[12px] font-medium leading-[100%] text-tgrey1">
            Earned
          </span>
        </div>
        <div className="flex  items-center w-[8px] h-[15px] gap-[7px]">
          <span className="">-</span>
        </div>
      </div>
      <div className="shrink-0 basis-[120px] grow-[1] items-center gap-[32px] flex justify-end">
        <div className="flex gap-[8px] items-center">
          <span className="text-[#06F] font-medium leading-[100%] capitalize text-sm">
            Details
          </span>
          <Image src="/assets/arrowdown.png" alt="" width={15} height={13} />
        </div>
        <Image src="/assets/questionmark.png" alt="" width={18} height={18} />
      </div>
    </div>
  );
};
