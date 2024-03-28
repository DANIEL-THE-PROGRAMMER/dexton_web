"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const option = ["Swap", "Liquidity/liquidify", "Referral"];

export const Tab = () => {
  const path = usePathname().split("/")[2];

  return (
    <div className="w-[516px] min-h-[56px] p-[6px] gap-[6px] flex bg-lblue2 rounded-[12px]">
      {option.map((opt, index) => {
        const style = {
          backgroundColor: path === opt.toLowerCase().split("/")[0] ? "white" : "transparent",
          color: path === opt.toLowerCase() ? "#141A21" : "#63707D",
        };
        return (
          <Link
            className="rounded-[8px] text-sm font-inter flex items-center justify-center grow basis-[164px]"
            href={`${opt.toLowerCase()}`}
            key={index}
            style={style}
          >
            {opt.split("/")[0]}
          </Link>
        );
      })}
    </div>
  );
};
