import Image from "next/image";
import { Button } from "@/app/components/button";

export default function Liquidity() {
  return (
    <div>
      <div className="flex flex-col items-start font-inter gap-[8px]">
        <h5 className="text-tblack text-2xl font-bold leading-[100%]">
          Your Liquidity
        </h5>
        <span className="text-tgrey1 text-[16px] leading-[24px]">
          Your Liquidity
        </span>
      </div>
      <div className="py-[32px] flex flex-col items-center gap-[24px] bg-[#FAFCFE] my-[32px]">
        <Image src="/assets/icloud.png" alt="" width={56} height={56} />
        <span className="text-tgrey1 text-center leading-[24px] w-[251px]">
          Your active V3 liquidity positions will appear here.
        </span>
      </div>
      <Button text="Connect Wallet" />
    </div>
  );
}
