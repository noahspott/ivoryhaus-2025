// Lib
import clsx from "clsx";

// Components
import IconHeader from "../../ui/IconHeader";
import PitchSelector from "./PitchSelector";
import { Music2Icon } from "lucide-react";
import OctaveSelector from "./OctaveSelector";

export default function PitchSection({ className }: { className?: string }) {
  return (
    <section className={clsx("p-3 synth-module", className)}>
      <IconHeader Icon={Music2Icon} variant="MEDIUM">
        Center Pitch
      </IconHeader>
      <div className="flex gap-12 pt-6 pb-9">
        <OctaveSelector />
        <PitchSelector />
      </div>
    </section>
  );
}
