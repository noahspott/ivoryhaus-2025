// Lib
import clsx from "clsx";
import { useSynthStore } from "@/src/providers/synth-store-provider";

// Components
import IconHeader from "../../ui/IconHeader";
import { Headphones } from "lucide-react";
import BinauralBeatsSelector from "./BinauralBeatsSelector";

export default function BinauralBeatSection({
  className,
}: {
  className?: string;
}) {
  const binauralFreq = useSynthStore((state) => state.binauralFreq);

  return (
    <section className={clsx("synth-module flex flex-col gap-6", className)}>
      <IconHeader Icon={Headphones} variant="MEDIUM">
        Binaural Beats Frequency
      </IconHeader>
      <p className="text-center text-primary-100">
        <span className="display-large">{binauralFreq}</span>
        <span className="title-small text-left pl-1">Hz</span>
      </p>
      <BinauralBeatsSelector />
    </section>
  );
}
