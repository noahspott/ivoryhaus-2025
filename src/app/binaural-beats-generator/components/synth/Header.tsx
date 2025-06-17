// Components
import { Target } from "lucide-react";
import IconHeader from "../ui/IconHeader";
import AudioControls from "./AudioControls";

export default function Header() {
  return (
    <section className="p-3 synth-module flex items-center justify-between">
      <IconHeader Icon={Target} variant="LARGE">
        Binaural Beats Generator
      </IconHeader>
      <AudioControls />
    </section>
  );
}
