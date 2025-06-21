"use client";

// Lib
import clsx from "clsx";
import { useSynthStore } from "@/src/providers/synth-store-provider";

// Components
import IconHeader from "../../ui/IconHeader";
import { AudioLines } from "lucide-react";
import FineTuningKnob from "./FineTuningKnob";

function getFrequencyLabel(a4Freq: number): string {
  const tuningLabels = new Map([
    [432, "Healing"],
    [440, "Standard"],
    [444, "Angel"],
    [446.2, "Baroque"],
    [448, "Bright"],
    [449, "Bright"],
    [450, "Bright"],
  ]);

  let label = tuningLabels.get(Number(a4Freq.toFixed(0)));

  if (label === undefined) {
    label = a4Freq < 440 ? "Flat" : "Sharp";
  }

  return label;
}

export default function FineTuningSection({
  className,
}: {
  className?: string;
}) {
  const { a4Freq } = useSynthStore((store) => store);

  return (
    <section className={clsx("synth-module flex flex-col gap-6", className)}>
      <IconHeader Icon={AudioLines} variant="MEDIUM">
        Fine Tuning
      </IconHeader>
      <div className="flex items-center justify-between px-12">
        <FineTuningKnob />
        <div className="text-right">
          <p className="text-primary-50 headline-large">{a4Freq.toFixed(0)}</p>
          <p className="text-primary-200 title-medium">
            {getFrequencyLabel(a4Freq)}
          </p>
        </div>
      </div>
    </section>
  );
}
