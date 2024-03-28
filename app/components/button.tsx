import { ReactElement } from "react";

export const Button = ({
  icon,
  text,
  bgColor,
  disbable,
}: {
  icon?: ReactElement;
  text: string;
  bgColor?: string;
  disbable?: boolean;
}) => {

    console.log(disbable);
  const style =
    disbable && bgColor
      ? {
          backgroundColor: `rgba(244, 66, 66, 0.05)`,
          color: bgColor,
        }
      : {
          backgroundColor: bgColor,
          color: "white",
        };

  return (
    <button
      className={`min-h-[50px] border-none outline-none flex w-full items-center justify-center gap-[20px] rounded-[8px] font-inter  ${
        disbable ? "bg-[#06F]/[0.5]" : "bg-[#06F]"
      }`}
      style={style}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
};
