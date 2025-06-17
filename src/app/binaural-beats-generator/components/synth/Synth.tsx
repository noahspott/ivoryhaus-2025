import Header from "./Header";
import Visualizer from "./Visualizer";
import WaveformSelector from "./WaveformSelector";

export default function Synth() {
  return (
    <div className="bg-primary-950 m-6 w-full min-h-full p-3 select-none">
      <Header />
      <Visualizer className="h-[161px]" />
      <div className="grid grid-cols-3 gap-3">
        <WaveformSelector />
      </div>
    </div>
  );
}
