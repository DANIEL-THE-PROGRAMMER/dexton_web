export const HowToParticipate = () => {
  return (
    <div className="mt-[96px] mb-[377px] font-inter">
      <h3 className="text-tblack text-[32px] font-bold text-center leading-[100%] mb-[87px]">
        How to participate in Launchpad?
      </h3>
      <div className="flex gap-[24px]">
        {HowTo.map((how, index) => {
          return (
            <div
              className="basis-[306px] grow-[1] bg-white relative flex flex-col items-center rounded-[12px] py-[48px]"
              key={index}
            >
              <div className="w-[48px] h-[48px] rounded-full justify-center items-center">
                <span className="font-bold text-[20px] leading-[100%] absolute rounded-full border-[#E8EFFB] text-tblack flex justify-center items-center top-[18px] left-[18px] border-[1px] w-[48px] h-[48px]">
                  {how.num}
                </span>
              </div>
              <div className="w-[100px] h-[100px] bg-[#F6FAFF] rounded-full"></div>
              <span className="text-tblack text-[18px] font-bold leading-[100%] mt-[48px] mb-[16px]">
                {how.title}
              </span>
              <span className="text-tgrey1 text-[16px] leading-[22px] text-center w-[209px]">
                {how.content}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const HowTo = [
  {
    num: 1,
    title: "Stake TGR in Holder Pool",
    content: "Stake TGR in Holder Pool to participate in the IDO.",
  },
  {
    num: 2,
    title: "Prepare TGR",
    content: "Have TGR in your BEP-20 wallet before the IDO launch on Tegro.",
  },
  {
    num: 3,
    title: "Deposit TGR",
    content: "Deposit TGR in the pools to buy EXOS during the sale.",
  },
  {
    num: 4,
    title: "Collect your tokens",
    content:
      "Withdraw your purchased tokens under proportion after the closure of IDO for Tegro Launchpad.",
  },
];
