"use client";

import Image from "next/image";
import { CarretDown, Moon, More, Search } from "../icons";
import Link from "next/link";

export const Nav = () => {
  return (
    <>
      <div className="h-[81px] flex items-center justify-between px-[48px] backdrop-blur-xl">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt=""
            className="mr-[38px]"
            width={40}
            height={40}
          />
          <nav className="flex items-center gap-[40px] font-inter text-sm text-tblack font-medium">
            <Link href="/swap_liquidity/swap">Swap</Link>
            <Link href="/swap_liquidity/liquidity/liquidify">Liquidity</Link>
            <Link href="#" className="flex items-center gap-[12px]">
              <span>Wallet</span>
              <span>
                <CarretDown />
              </span>
            </Link>
            <Link href="#" className="flex items-center gap-[12px]">
              <span>E-Commerce</span>
              <span>
                <CarretDown />
              </span>
            </Link>
            <Link href="#" className="flex items-center gap-[12px]">
              <span>NFT</span>
              <span>
                <CarretDown />
              </span>
            </Link>
            <Link href="#" className="flex items-center gap-[12px]">
              <span>More</span>
              <span>
                <CarretDown />
              </span>
            </Link>
            <More />
          </nav>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="flex gap-[24px] items-center min-h-[40px] px-[16px] rounded-[6px] w-[284px] border-[1px] border-lblue1">
            <Search />
            <input
              type="text"
              className="bg-transparent"
              style={{ width: "calc(100% - 24px)" }}
              placeholder="Search Tokens"
            />
          </div>
          <div className="flex items-center justify-center bg-lblue5 min-h-[40px] border-[1px] border-lblue1 w-[40px]">
            <Moon />
          </div>
          <button className="min-h-[40px] text-center leding-[100%] font-medium font-inter border-none text-[15px] bg-dblue1 text-white w-[174px] rounded-[8px]">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};
