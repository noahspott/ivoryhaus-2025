import Image from "next/image";
import logo from "@/public/images/ivoryhaus-logo.png";
import ExportSection from "./ExportSection";

export default function Menu() {
  return (
    <div className="max-w-[216px] p-5 flex flex-col bg-primary-950 select-none">
      <Image src={logo} alt="ivoryhaus logo" className="mb-2" />
      <div className="bg-primary-900 w-full h-px mb-10" />
      <ExportSection />
    </div>
  );
}
