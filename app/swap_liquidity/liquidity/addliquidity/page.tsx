"use client";

import { Button } from "@/app/components/button";
import { ArrowLeft, ArrowUpDown } from "@/app/components/icons";
import { Field } from "../../components/field";
import { ProcessModal } from "../../../components/processmodal";
import { useState } from "react";

export default function AddLiquidity() {
  const [processing, SetProcessing] = useState<boolean>(false);

  const [token1, setToken1] = useState<number | string>(0);
  const [token2, setToken2] = useState<number | string>(0);
  const isNotEmpty = token1 !== 0 && token2 !== 0;

  const handleProcess = () => {
    if (isNotEmpty) SetProcessing(true);
  };

  return (
    <>
      {processing && <ProcessModal setProcessing={SetProcessing} />}
      <div className="flex items-center mb-[32px] font-inter gap-[16px]">
        <div className="w-[32px] h-[32px] items-center justify-center flex bg-[#F3F9FE] rounded-[6px]">
          <ArrowLeft />
        </div>
        <span className="text-tblack text-2xl font-bold leading-[100%] ">
          Add Liquidity
        </span>
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
          liq
        />
        <Field
          image="/assets/tgr.png"
          num={token2}
          abb="TGR"
          max
          setNum={setToken2}
          liq
        />
      </div>
      <div className="bg-[#FAFCFE] p-[16px] rounded-[8px] mt-[16px] flex flex-col gap-[16px]">
        <div className="flex justify-between text-sm">
          <span className="text-tblack text-sm font-medium">TON per TGR:</span>
          <span className="text-tgrey1">0.055273439</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-tblack text-sm font-medium">TGR per TON:</span>
          <span className="text-tgrey1">18.091872366</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-tblack text-sm font-medium">
            Share of Pool:
          </span>
          <span className="text-tgrey1">0.00%</span>
        </div>
      </div>
      <div className="mt-[32px]" onClick={handleProcess}>
        <Button
          bgColor="#EB5757"
          disbable={isNotEmpty ? false : true}
          text={isNotEmpty ? "Add Liquidity" : "Enter an amount"}
        />
      </div>
    </>
  );
}
