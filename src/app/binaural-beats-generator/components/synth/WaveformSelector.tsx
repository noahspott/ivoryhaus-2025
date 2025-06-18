"use client";

// Lib
import { useState } from "react";

// Components
import { Waves, LucideChevronLeft, LucideChevronRight } from "lucide-react";
import IconHeader from "../ui/IconHeader";
import Image, { StaticImageData } from "next/image";

// Images
import sine from "@/public/images/waveforms/sine.svg";
import square from "@/public/images/waveforms/square.svg";
import triangle from "@/public/images/waveforms/triangle.svg";

type Waveform = {
  name: string;
  image: StaticImageData;
};

const waveforms: Waveform[] = [
  {
    name: "sine",
    image: sine,
  },
  {
    name: "triangle",
    image: triangle,
  },
  {
    name: "square",
    image: square,
  },
];

export default function WaveformSelector() {
  const [currentWaveformIndex, setCurrentWaveformIndex] = useState<number>(0);

  function handleClick(direction: "LEFT" | "RIGHT") {
    if (direction === "LEFT") {
      setCurrentWaveformIndex(
        (prev) => (prev - 1 + waveforms.length) % waveforms.length
      );
    }

    if (direction === "RIGHT") {
      setCurrentWaveformIndex((prev) => (prev + 1) % waveforms.length);
    }
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
            src={waveforms[currentWaveformIndex].image}
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
