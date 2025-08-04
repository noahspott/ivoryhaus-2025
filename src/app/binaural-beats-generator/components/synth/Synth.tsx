"use client";

import clsx from "clsx";
import Header from "./Header";
import Visualizer from "./Visualizer";
import WaveformSelector from "./WaveformSelector";
import PitchSection from "./pitch-section/PitchSection";
import FineTuningSection from "./fine-tuning-section/FineTuningSection";
import BinauralBeatSection from "./binaural-beat-section/BinauralBeatSection";
import { useBinauralSynth } from "../../engine/useBinauralSynth";
import { useEffect, useState } from "react";

export default function Synth({ className }: { className?: string }) {
  const { leftOsc, rightOsc } = useBinauralSynth();

  const [octaveSelectorLayout, setOctaveSelectorLayout] = useState<
    "horizontal" | "vertical"
  >("vertical");

  useEffect(() => {
    const updateLayout = () => {
      console.log("window.innerWidth", window.innerWidth);
      setOctaveSelectorLayout(
        window.innerWidth < 1420 ? "horizontal" : "vertical"
      );
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div
      className={clsx(
        "synth-container m-3 2xl:m-6 p-3 select-none grid grid-rows-10 gap-2 2xl:gap-3",
        className
      )}
    >
      <Header className="row-span-1" />
      <Visualizer className="row-span-2" />
      <div className="grid grid-cols-12 gap-2 2xl:gap-3 row-span-3">
        <WaveformSelector className="col-span-3" />
        <PitchSection
          octaveSelectorLayout={octaveSelectorLayout}
          className="col-span-6"
        />
        <FineTuningSection className="col-span-3" />
      </div>
      <BinauralBeatSection className="row-span-4" />
    </div>
  );
}
