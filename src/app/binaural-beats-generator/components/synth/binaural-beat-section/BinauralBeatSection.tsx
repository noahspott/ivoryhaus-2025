// Lib
import clsx from "clsx";

// Components
import IconHeader from "../../ui/IconHeader";
import { Headphones } from "lucide-react";

export default function BinauralBeatSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={clsx("synth-module", className)}>
      <IconHeader Icon={Headphones} variant="MEDIUM">
        Binaural Beats Frequency
      </IconHeader>
    </section>
  );
}
