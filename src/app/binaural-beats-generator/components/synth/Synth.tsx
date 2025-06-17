import clsx from "clsx";
import Header from "./Header";
import Visualizer from "./Visualizer";
import WaveformSelector from "./WaveformSelector";

export default function Synth({ className }: { className?: string }) {
  return (
    <div
      className={clsx("bg-primary-950 m-6 p-3 select-none w-full", className)}
    >
      <Header />
      <Visualizer className="h-[161px]" />
      <div className="grid grid-cols-3 gap-3">
        <WaveformSelector />
      </div>
    </div>
  );
}
