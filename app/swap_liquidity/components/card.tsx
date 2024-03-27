export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[526px] rounded-[12px] bg-white p-[32px] min-h-[326px]">
      {children}
    </div>
  );
};
