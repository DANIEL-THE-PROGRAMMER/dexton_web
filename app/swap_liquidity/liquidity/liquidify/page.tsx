"use client";

import Image from "next/image";
import { Button } from "@/app/components/button";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@/app/components/icons";

export default function Liquidity() {
  const Tokens = [
    {
      image: "/assets/Tether.png",
      name: "USTD / TGR",
      content: "Theather / Tegro Coin",
    },
    {
      image: "/assets/TRON.png",
      name: "TRON / TGR",
      content: "TRON / Tegro Coin",
    },
    {
      image: "/assets/Coinbase.png",
      name: "COINBASE / TGR",
      content: "COINBASE / Tegro Coin",
    },
    {
      image: "/assets/Phantom.png",
      name: "Phantom / TGR",
      content: "Phantom/ Tegro Coin",
    },
  ];

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
      {!Tokens && (
        <div className="py-[32px] flex flex-col items-center gap-[24px] bg-[#FAFCFE] my-[32px]">
          <Image src="/assets/icloud.png" alt="" width={56} height={56} />
          <span className="text-tgrey1 text-center leading-[24px] w-[251px]">
            Your active V3 liquidity positions will appear here.
          </span>
        </div>
      )}
      {Tokens && (
        <div className="flex flex-col items-center my-[32px] font-inter">
          {Tokens.map((token, index) => {
            return (
              <div
                className="flex justify-between items-center py-[22px] w-full"
                key={index}
              >
                <div className="flex gap-[24px] items-center">
                  <Image
                    src={token.image}
                    alt={token.name}
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[#141A21] text-[16px]  font-medium leading-[16px]">
                      {token.name}
                    </span>
                    <span className="text-[#63707D] text-[12px] leading-[12px] ">
                      {token.content}
                    </span>
                  </div>
                </div>
                <ArrowRight />
              </div>
            );
          })}
        </div>
      )}
      <Link href="addliquidity">
        <Button text="Add Liquidify" bgColor="#EB5757" />
      </Link>
    </div>
  );
}
