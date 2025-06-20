"use client";

// Lib
import clsx from "clsx";
import { useState } from "react";

// Components
import IconHeader from "../../ui/IconHeader";
import { AudioLines } from "lucide-react";
import FineTuningKnob from "./FineTuningKnob";

function getFrequencyLabel(frequency: number): string {
  const tuningLabels = new Map([
    [432, "Healing"],
    [440, "Standard"],
    [444, "Angel"],
    [446.2, "Baroque"],
    [448, "Bright"],
    [449, "Bright"],
    [450, "Bright"],
  ]);

  let label = tuningLabels.get(Number(frequency.toFixed(0)));

  if (label === undefined) {
    label = frequency < 440 ? "Flat" : "Sharp";
  }

  return label;
}

export default function FineTuningSection({
  className,
}: {
  className?: string;
}) {
  const [frequency, setFrequency] = useState<number>(440);
  return (
    <section className={clsx("synth-module flex flex-col gap-6", className)}>
      <IconHeader Icon={AudioLines} variant="MEDIUM">
        Fine Tuning
      </IconHeader>
      <div className="flex items-center justify-between px-12">
        <FineTuningKnob frequency={frequency} setFrequency={setFrequency} />
        <div className="text-right">
          <p className="text-primary-50 headline-large">
            {frequency.toFixed(0)}
          </p>
          <p className="text-primary-200 title-medium">
            {getFrequencyLabel(frequency)}
          </p>
        </div>
      </div>
    </section>
  );
}
