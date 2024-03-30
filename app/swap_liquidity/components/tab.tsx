"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const option = [
  "swap_liquidity/Swap",
  "swap_liquidity/Liquidity/liquidify",
  "swap_liquidity/Referral",
];

export const Tab = () => {
  const path = usePathname().split("/").length - 1;

  const getLink = usePathname().split("/")[path];

  return (
    <div className="w-[516px] min-h-[56px] p-[6px] gap-[6px] flex bg-lblue2 rounded-[12px]">
      {option.map((opt, index) => {
        const style = {
          backgroundColor:
            getLink === opt.split("/")[opt.split("/").length - 1].toLowerCase()
              ? "white"
              : "transparent",
          color:
            getLink === opt.split("/")[opt.split("/").length - 1].toLowerCase()
              ? "#141A21"
              : "#63707D",
        };
        return (
          <Link
            className="rounded-[8px] text-sm font-inter flex items-center justify-center grow basis-[164px]"
            href={`/${opt.toLowerCase()}`}
            key={index}
            style={style}
          >
            {opt.split("/")[opt.split("/").length - 1]}
          </Link>
        );
      })}
    </div>
  );
};
