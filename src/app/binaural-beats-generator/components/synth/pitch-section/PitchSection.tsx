// Lib
import clsx from "clsx";

// Components
import IconHeader from "../../ui/IconHeader";
import PitchSelector from "./PitchSelector";
import { Music2Icon } from "lucide-react";
import OctaveSelector from "./OctaveSelector";

export default function PitchSection({
  className,
  octaveSelectorLayout,
}: {
  className?: string;
  octaveSelectorLayout?: "horizontal" | "vertical";
}) {
  return (
    <section className={clsx("synth-module flex flex-col gap-6", className)}>
      <IconHeader Icon={Music2Icon} variant="MEDIUM">
        Center Pitch
      </IconHeader>
      <div
        className={clsx("flex gap-6 2xl:gap-12 self-center", {
          "flex-col": octaveSelectorLayout === "horizontal",
          "flex-row": octaveSelectorLayout === "vertical",
        })}
      >
        <OctaveSelector
          layout={octaveSelectorLayout}
          className={clsx({
            "self-center order-last": octaveSelectorLayout === "horizontal",
          })}
        />
        <PitchSelector />
      </div>
    </section>
  );
}
