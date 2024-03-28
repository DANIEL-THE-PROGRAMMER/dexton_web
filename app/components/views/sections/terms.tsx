export const TermsOfUse = () => {
  return (
    <div className="mt-[96px] font-inter">
      <div className="flex flex-col">
        <h4 className="text-tblack text-[32px] font-bold leading-[39px]">
          Terms of use
        </h4>
        <small className="mt-[4px] mb-[16px] text-tgrey1 font-medium leading-[24px] text-[16px]">
          Revised: Aprol 8, 2022
        </small>
        <p className="text-tblack font-medium leading-[26px] text-[18px] w-[441px]">
          Please read the terms carefully as they govern your use of
          Tegro.Finance “Fixed Staking” services.
        </p>
      </div>
      <div className="h-[1px] bg-[#E8EFFB] mt-[24px] mb-[40px]"></div>
      <div className="flex gap-[24px]">
        <div className="flex flex-col gap-[32px] grow-[1] basis-[200px]">
          {Terms.slice(0, 7).map((term, index) => {
            return (
              <div key={index} className="flex items-start gap-[16px]">
                <span className="w-[20px] text-sm font-medium leading-[22px]">
                  {term.num}
                </span>
                <div className="" style={{ width: "calc(100% - 20px)" }}>
                  {term.terms}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[32px] grow-[1]  basis-[200px]">
          {Terms.slice(7, Terms.length).map((term, index) => {
            return (
              <div key={index} className="flex items-start gap-[16px]">
                <span className="w-[20px] text-sm font-medium leading-[22px]">
                  {term.num}
                </span>
                <div className="" style={{ width: "calc(100% - 20px)" }}>
                  {term.terms}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Terms = [
  {
    num: "01",
    terms:
      "By approving any of the contracts on this page, you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use, hereinafter referred to as “these Terms”.",
  },
  {
    num: "02",
    terms:
      "Reference to “you” and “your” in these Terms are references to any person using or accessing or attempting to use or access this page.",
  },
  {
    num: "03",
    terms:
      "By approving any of the contracts on this page, you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use, hereinafter referred to as “these Terms”.",
  },
  {
    num: "04",
    terms:
      "By making use of Tegro “Fixed Staking” services you acknowledge and agree that you are aware of the risks associated with such services and shall assume all risks related to the use of such services.",
  },
  {
    num: "05",
    terms:
      "Tegro assumes all responsibility and liability for the funds deposited by users to the “Fixed Staking” contracts.",
  },
  {
    num: "06",
    terms:
      "By approving any of the contracts on this page, you acknowledge and agree that such actions represent your true investment decisions and you accept the potential risks and benefits of your investment decisions.",
  },
  {
    num: "07",
    terms:
      "The APY is adjusted daily based on the on-chain staking rewards, and the specific APY is subject to the page display on the day.",
  },
  {
    num: "08",
    terms:
      "You can withdraw your funds at any time otherwise stipulated by Tegro.",
  },
  {
    num: "09",
    terms:
      "By approving any of the contracts on this page, you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use, hereinafter referred to as “these Terms”.",
  },
  {
    num: "10",
    terms:
      "The staking interest is distributed on a daily basis from 12:00 PM (UTC) on the day after the funds are deposited to the contract to the end of the corresponding product period (given that the funds are deposited before 12:00 PM (UTC).",
  },
  {
    num: "11",
    terms:
      "By opting for an early redemption, you should fully recognize the risks associated with such actions and operate cautiously.",
  },
  {
    num: "12",
    terms:
      "Tegro may make changes to these Terms and to the information contained on this page at any time. Users undertake to refer to these Terms promptly and regularly. Tegro will not be held liable or responsible in any way of compensation should users incur personal losses arising from ignorance and/or negligence of these Terms.",
  },
  {
    num: "13",
    terms:
      "No communication or information provided to you by Tegro is intended as, or shall be considered or construed as, investment advice, financial advice, trading advice, recommendation to transact in any investment or solicitation to engage in any investment activity.",
  },
  {
    num: "14",
    terms:
      "If you do not agree to the aforementioned Terms you should refrain from using Tegro “Fixed Staking” services.",
  },
];
