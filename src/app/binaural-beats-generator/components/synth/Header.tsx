// Lib
import clsx from "clsx";

// Components
import { Target } from "lucide-react";
import IconHeader from "../ui/IconHeader";
import AudioControls from "./AudioControls";

export default function Header({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        "p-3 synth-module flex items-center justify-between",
        className
      )}
    >
      <IconHeader Icon={Target} variant="LARGE">
        Binaural Beats Generator
      </IconHeader>
      <AudioControls />
    </section>
  );
}
