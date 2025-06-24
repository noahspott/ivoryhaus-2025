"use client";

// Lib
import { useSynthStore } from "@/src/providers/synth-store-provider";

// Components
import { Waves, LucideChevronLeft, LucideChevronRight } from "lucide-react";
import IconHeader from "../ui/IconHeader";
import Image from "next/image";

// Images
import sine from "@/public/images/waveforms/sine.svg";
import square from "@/public/images/waveforms/square.svg";
import triangle from "@/public/images/waveforms/triangle.svg";

// Types
import { Waveform } from "@/src/types/Waveform";

const waveformImageMap = new Map([
  [Waveform.Sine, sine],
  [Waveform.Triangle, triangle],
  [Waveform.Square, square],
]);

const waveformValues = Object.values(Waveform);

export default function WaveformSelector() {
  const { waveform, updateWaveform } = useSynthStore((state) => state);

  function handleClick(direction: "LEFT" | "RIGHT") {
    let index = waveformValues.findIndex(
      (waveformVal) => waveformVal === waveform
    );

    if (direction === "LEFT") {
      index = (index - 1 + waveformValues.length) % waveformValues.length;
    }

    if (direction === "RIGHT") {
      index = (index + 1 + waveformValues.length) % waveformValues.length;
    }

    updateWaveform(waveformValues[index]);
  }

  return (
    <section className="synth-module flex flex-col min-w-2xs">
      <IconHeader Icon={Waves} variant="MEDIUM">
        Waveform
      </IconHeader>
      <div className="flex gap-3 mt-6 self-center">
        <button
          className="hover:cursor-pointer active:scale-95"
          onClick={() => handleClick("LEFT")}
        >
          <LucideChevronLeft className="text-primary-50 p-1.5 bg-primary-800 border border-primary-700 rounded-full size-8" />
        </button>
        <div className="p-6 border border-primary-800 h-[95px] w-[176px]">
          <Image
            src={waveformImageMap.get(waveform)}
            className="w-[128px] h-[47px]"
            alt="Waveform"
          />
        </div>
        <button
          className="hover:cursor-pointer active:scale-95"
          onClick={() => handleClick("RIGHT")}
        >
          <LucideChevronRight className="text-primary-50 p-1.5 bg-primary-800 border border-primary-700 rounded-full size-8" />
        </button>
      </div>
    </section>
  );
}
