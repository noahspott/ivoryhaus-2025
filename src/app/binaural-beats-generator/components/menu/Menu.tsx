// Lib
import clsx from "clsx";

// Components
import Link from "next/link";
import Image from "next/image";
import ExportSection from "./ExportSection";
import PresetsSection from "./PresetsSection";
import Tooltip from "./Tooltip";

// Images
import logo from "@/public/images/ivoryhaus-logo.png";

export default function Menu({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "p-5 flex flex-col bg-primary-950 select-none",
        className
      )}
    >
      <Link href="/">
        <Image src={logo} alt="ivoryhaus logo" className="mb-2" />
      </Link>
      <div className="bg-primary-900 w-full h-px mb-10" />
      <div className="flex flex-col gap-[60px]">
        <ExportSection />
        <PresetsSection />
        <Tooltip />
      </div>
    </div>
  );
}
