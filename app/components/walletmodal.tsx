"use client";

import Image from "next/image";
import { ArrowRight, Close } from "@/app/components/icons";
import { Dispatch, SetStateAction, useState } from "react";

const Wallets = [
  {
    image: "/assets/metamask.png",
    name: "MetaMask",
  },
  {
    image: "/assets/wc-coin.png",
    name: "CoinBase Wallet",
  },
  {
    image: "/assets/wc-connect.png",
    name: "WalletConnect",
  },
  {
    image: "/assets/wc-opera.png",
    name: "Opera Wallet",
  },
];

export const WalletModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  if (!open) return null;

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black/[0.32] z-20 flex justify-center items-center">
      <div className="w-[526px] rounded-[12px] bg-white px-[32px] min-h-[406px] mt-[-100px] pt-[40px] pb-[52px]">
        <div className="flex justify-between mb-[40px] items-center">
          <span className="text-[18px] leading-[100%] font-inter font-medium">
            Connect a wallet
          </span>
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            <Close />
          </span>
        </div>
        <div className="flex flex-col gap-[16px]">
          {Wallets.map((wallet, index) => {
            return (
              <div
                className="flex justify-between items-center px-[24px] rounded-[8px] w-full min-h-[56px] border-[1px] border-[#E8EFFB]"
                key={index}
                onClick={() => setOpen(!open)}
              >
                <div className="flex gap-[24px] items-center">
                  <Image
                    src={wallet.image}
                    alt={wallet.name}
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[#141A21] text-[16px]  font-medium leading-[16px]">
                      {wallet.name}
                    </span>
                  </div>
                </div>
                <ArrowRight />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
