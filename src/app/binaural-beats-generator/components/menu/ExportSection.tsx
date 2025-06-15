"use client";

// Lib
import { useState } from "react";

// Components
import { FileOutput } from "lucide-react";
import IconHeader from "../ui/IconHeader";
import NumberInput from "../ui/NumberInput";
import ToggleSwitch from "../ui/ToggleSwitch";
import Button from "../ui/Button";

export default function ExportSection() {
  const [duration, setDuration] = useState<number>(0);
  const [isWav, setIsWav] = useState<boolean>(false);

  function downloadButtonHandler() {
    console.log({
      isWav: isWav,
      duration: duration,
    });
  }

  return (
    <section className="flex flex-col gap-4">
      <IconHeader variant="SMALL" Icon={FileOutput}>
        Export
      </IconHeader>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="export-duration"
          className="label-medium text-primary-200"
        >
          DURATION (MIN)
        </label>
        <NumberInput
          stateVariable={duration}
          setter={setDuration}
          className="border-primary-900 border text-primary-50 text-right h-10 pe-3"
          id="export-duration"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="label-medium text-primary-200">FILE TYPE</label>
        <ToggleSwitch isWav={isWav} setIsWav={setIsWav} />
      </div>
      <Button onClick={() => downloadButtonHandler()}>Download</Button>
    </section>
  );
}
