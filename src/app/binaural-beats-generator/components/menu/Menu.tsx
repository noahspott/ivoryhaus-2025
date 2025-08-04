// Lib
import clsx from "clsx";

// Components
import Link from "next/link";
import Image from "next/image";
import ExportSection from "./ExportSection";
import PresetsSection from "./PresetsSection";
import Tooltip from "./Tooltip";
import { MenuIcon } from "lucide-react";

// Images
import logo from "@/public/images/ivoryhaus-logo.png";

export default function Menu({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "p-5 flex flex-row xl:flex-col bg-primary-950 select-none justify-between items-center xl:justify-normal",
        className
      )}
    >
      <Link href="/" aria-label="Navigate to the ivoryHAUS home page">
        <Image src={logo} alt="ivoryhaus logo" className="mb-2 max-w-40" />
      </Link>
      <div className="bg-primary-900 w-full h-px mb-10 xl:block hidden" />
      <div className="flex-col gap-[60px] hidden xl:flex">
        <ExportSection />
        <PresetsSection />
        <Tooltip />
      </div>
      <MenuIcon className="text-white block xl:hidden" />
    </div>
  );
}
