"use client";

// Lib
import clsx from "clsx";
import { useState } from "react";

// Components
import IconHeader from "../../ui/IconHeader";
import { AudioLines } from "lucide-react";
import FineTuningKnob from "./FineTuningKnob";

function getFrequencyLabel(frequency: number): string {
  console.log(frequency);
  return "Standard";
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
        <FineTuningKnob />
        <div className="text-right">
          <p className="text-primary-50 headline-large">{frequency}</p>
          <p className="text-primary-200 title-medium">
            {getFrequencyLabel(frequency)}
          </p>
        </div>
      </div>
    </section>
  );
}
