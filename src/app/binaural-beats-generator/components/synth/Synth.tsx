import clsx from "clsx";
import Header from "./Header";
import Visualizer from "./Visualizer";
import WaveformSelector from "./WaveformSelector";
import PitchSection from "./pitch-section/PitchSection";
import FineTuningSection from "./fine-tuning-section/FineTuningSection";
import BinauralBeatSection from "./binaural-beat-section/BinauralBeatSection";
import { useBinauralSynth } from "../../engine/useBinauralSynth";

export default function Synth({ className }: { className?: string }) {
  const { leftOsc, rightOsc } = useBinauralSynth();

  return (
    <div
      className={clsx(
        "synth-container m-6 p-3 select-none grid grid-rows-10 gap-3",
        className
      )}
    >
      <Header className="row-span-1" />
      <Visualizer
        leftOsc={leftOsc}
        rightOsc={rightOsc}
        className="row-span-2"
      />
      <div className="grid grid-cols-12 gap-3 row-span-3">
        <WaveformSelector className="col-span-3" />
        <PitchSection className="col-span-6" />
        <FineTuningSection className="col-span-3" />
      </div>
      <BinauralBeatSection className="row-span-4" />
    </div>
  );
}
