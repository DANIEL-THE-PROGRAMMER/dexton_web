import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center pb-[80px] gap-[32px] justify-center w-full">
      <span className="font-semibold text-[16px] leading-[100%] text-tblack">DEX by Tegro</span>
      <div className="flex gap-[24px] items-center justify-center">
        <Image src="/assets/br-instagram.png" alt="" width={24} height={24} />
        <Image src="/assets/br-github.png" alt="" width={24} height={24} />
        <Image src="/assets/br-telegram.png" alt="" width={24} height={24} />
        <Image src="/assets/br-twitter.png" alt="" width={24} height={24} />
        <Image src="/assets/br-fb-sq.png" alt="" width={24} height={24} />
        <Image src="/assets/br-snapchat-sq.png" alt="" width={24} height={24} />
        <Image src="/assets/br-linkedin.png" alt="" width={24} height={24} />
        <Image src="/assets/br-whatsapp.png" alt="" width={24} height={24} />
      </div>
    </div>
  );
};
