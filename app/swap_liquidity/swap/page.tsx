"use client";

import { Settings, ArrowUpDown } from "@/app/components/icons";
import { Field } from "../components/field";
import { Button } from "@/app/components/button";
import { useState } from "react";
import Image from "next/image";
import { ProcessModal } from "../components/processmodal";

export default function Swap() {
  const [ton, setTon] = useState<number>(0);
  const [tgr, setTgr] = useState<number>(0);

  const [processing, SetProcessing] = useState<boolean>(false);

  const isNotEmpty = ton !== 0 && tgr !== 0;

  const handleProcess = () => {
    if (isNotEmpty) SetProcessing(true);
  };

  return (
    <>
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
          num={ton}
          abb="TON"
          max
          setNum={setTon}
        />
        <Field image="/assets/tgr.png" num={tgr} abb="TGR" setNum={setTgr} />
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
        <Button text={isNotEmpty ? "Exchange" : "Connect Wallet"} />
      </div>
    </>
  );
}
