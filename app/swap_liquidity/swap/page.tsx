"use client";

import { Settings, ArrowUpDown } from "@/app/components/icons";
import { Field } from "../components/field";
import { Button } from "@/app/components/button";
import { useState } from "react";
import Image from "next/image";
import { ProcessModal } from "../../components/processmodal";
import { WalletModal } from "@/app/components/walletmodal";

export default function Swap() {
  const [processing, SetProcessing] = useState<boolean>(false);

  const [token1, setToken1] = useState<number | string>("");
  const [token2, setToken2] = useState<number | string>("");
  const [connected, setConnected] = useState(false);
  const isEmpty = token1 === "" && token2 === "";
  const [open, setOpen] = useState(false);

  console.log(isEmpty);

  const handleProcess = () => {
    if (!connected) {
      setOpen(!open);
      setConnected(true);
      return;
    }
    if (!isEmpty) SetProcessing(true);
  };

  return (
    <>
      <WalletModal open={open} setOpen={setOpen} />
      {processing && <ProcessModal setProcessing={SetProcessing} />}
      <div className="flex justify-between items-center mb-[32px] font-inter">
        <span className="text-tblack text-2xl font-bold leading-[100%] ">
          Swap
        </span>
        <Settings />
      </div>
      <div className="relative leading-[15px] flex flex-col gap-[16px]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-[16px]">
          <ArrowUpDown />
        </div>
        <Field
          image="/assets/TON.png"
          num={token1}
          abb="TON"
          max
          setNum={setToken1}
        />
        <Field
          image="/assets/tgr.png"
          num={token2}
          abb="TGR"
          setNum={setToken2}
        />
      </div>
      <div className="bg-[#FAFCFE] p-[16px] rounded-[8px] mt-[16px] flex flex-col gap-[16px]">
        <div className="flex justify-between text-sm">
          <span className="text-tblack text-sm font-medium">Price:</span>
          <span className="text-tgrey1">1 TON per 10 TGR</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-tblack text-sm font-medium">
            Slippage Tolarance:
          </span>
          <span className="text-tgrey1">10.1%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-tblack text-sm font-medium">
            Minimum received:
          </span>
          <span className="text-tgrey1">0 TGR</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-tblack text-sm font-medium">Price Impact:</span>
          <span className="text-[#27AE60]">{"<"} 0.01%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-tblack text-sm font-medium">Route:</span>
          <span className="text-tgrey1">TON {">"} TGR </span>
        </div>
      </div>
      <div className="mt-[32px]" onClick={handleProcess}>
        <Button
          text={
            !connected
              ? "Connect wallet"
              : connected && isEmpty
              ? "Enter an amount"
              : "EXchange"
          }
          disbable={connected && isEmpty ? true : false}
        />
      </div>
    </>
  );
}
