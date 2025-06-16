import Header from "./Header";
import Visualizer from "./Visualizer";

export default function Synth() {
  return (
    <div className="bg-primary-950 m-6 w-full min-h-full p-3">
      <Header />
      <Visualizer className="h-[161px]" />
    </div>
  );
}
