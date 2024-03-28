import { Key } from "react";
import { Accordion } from "../../accordion";

const FAQs = [
  {
    question:
      "Does the lock term period of 30,60, and 90 days restart after each additional stake?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
  {
    question: "Can I unstake the total or partial amount from the pool?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
  {
    question: "How much time does it take to make Harvest or Unstake?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },

  {
    question: "What Fixed Staking pools are available on Tegro Finance?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
  {
    question: "How much time does it take to make Harvest or Unstake?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
  {
    question: "Is there any impermanent loss in Fixed Staking?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
  {
    question: "When can I receive the rewards?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
  {
    question: "Is there any fee for early withdrawal from the pools?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
  {
    question:
      "Do Fixed Staking pools continue to function after the 30/60/90 days of lock term?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
  {
    question: "When can I make Harvest from the pool?",
    answer:
      "Yes. For example, today, you have staked 1 TON in the pool with a 60 days lock term. Right after the stake has been made, the timer was launched for 60 days, when you can harvest earnings with no fee. In 10 days, you decided to make an additional stake of 2 TON in the same pool. During this stake, the timer restarts and starts counting 60 days again. With this action, the rewards are not being withdrawn and remain on the balance.",
  },
];

export const Faqs = () => {
  return (
    <div className="mt-[96px]">
      <h2 className="font-inter text-tblack text-[32px] leading-[100%] font-bold mb-[48px]">
        FAQ
      </h2>
      <div className="flex gap-x-[24px]">
        <div className="grow-[1] basis-[200px] flex flex-col gap-[16px]">
          {FAQs.slice(0, 5).map(
            (
              faq: { question: string; answer: string },
              index: Key | null | undefined
            ) => {
              return (
                <div key={index}>
                  <Accordion faq={faq} />
                </div>
              );
            }
          )}
        </div>
        <div className="grow-[1] basis-[200px] flex flex-col gap-[16px]">
          {FAQs.slice(5, FAQs.length).map(
            (
              faq: { question: string; answer: string },
              index: Key | null | undefined
            ) => {
              return (
                <div key={index}>
                  <Accordion faq={faq} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
