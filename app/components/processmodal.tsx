import Image from "next/image";
import { Close } from "@/app/components/icons";
import { Dispatch, SetStateAction } from "react";

export const ProcessModal = ({
  setProcessing,
}: {
  setProcessing: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black/[0.32] z-20 flex justify-center items-center">
      <div className="mx-auto md:w-[526px] rounded-[12px] bg-white p-[32px] min-h-[406px] mt-[-100px]">
        <div className="flex justify-end">
          <span className="cursor-pointer" onClick={() => setProcessing(false)}>
            <Close />
          </span>
        </div>
        <div className="mt-[41px] mb-[24px] flex justify-center">
          <Image src="/assets/data.png" alt="data" width={80} height={80} />
        </div>
        <div className="flex justify-center text-tblack text-2xl leading-[100%] font-inter font-semibold">
          <span>Processing</span>
        </div>
        <div className="flex justify-center text-tblack text-[16px] leading-[100%] font-inter text-center text-tgrey1 mt-[16px] w-[300px] mx-auto leading-[24px]">
          <span>
            Confirm the action in the {"{Wallet Name}"} app on your mobile
            device
          </span>
        </div>
      </div>
    </div>
  );
};
