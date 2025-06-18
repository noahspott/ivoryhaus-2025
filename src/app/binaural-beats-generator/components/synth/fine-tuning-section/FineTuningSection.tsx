"use client";

// Lib
import clsx from "clsx";
import { useState } from "react";

// Components
import IconHeader from "../../ui/IconHeader";
import { AudioLines } from "lucide-react";
import FineTuningKnob from "./FineTuningKnob";

export default function FineTuningSection({
  className,
}: {
  className?: string;
}) {
  const [frequency, setFrequency] = useState<number>(440);
  return (
    <section className={clsx("synth-module", className)}>
      <IconHeader Icon={AudioLines} variant="MEDIUM">
        Fine Tuning
      </IconHeader>
      <div className="flex justify-between">
        <FineTuningKnob />
        <div className="text-right">
          <p className="text-primary-50">{frequency}</p>
          <p></p>
        </div>
      </div>
    </section>
  );
}
