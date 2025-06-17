import clsx from "clsx";
import Header from "./Header";
import Visualizer from "./Visualizer";
import WaveformSelector from "./WaveformSelector";
import PitchSection from "./pitch-section/PitchSection";

export default function Synth({ className }: { className?: string }) {
  return (
    <div
      className={clsx("synth-container m-6 p-3 select-none w-full", className)}
    >
      <Header />
      <Visualizer className="h-[161px]" />
      <div className="flex gap-3">
        <WaveformSelector />
        <PitchSection />
      </div>
    </div>
  );
}
