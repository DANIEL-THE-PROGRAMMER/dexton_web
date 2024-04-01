import { Tab } from "./components/tab";
import { Card } from "./components/card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className="flex flex-col items-center"
        style={{ height: "calc(100vh - 81px)" }}
      >
        <div className="mt-[48px] flex flex-col gap-[24px] w-[95%] mx-auto md:w-auto">
          <Tab />
          <Card>{children}</Card>
        </div>
      </div>
    </>
  );
}
