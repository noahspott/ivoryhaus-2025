// Components
import IconHeader from "../../ui/IconHeader";
import PitchSelector from "./PitchSelector";
import { Music2Icon } from "lucide-react";

export default function PitchSection() {
  return (
    <section className="p-3 synth-module">
      <IconHeader Icon={Music2Icon} variant="MEDIUM">
        Center Pitch
      </IconHeader>
      <div className="pt-6 pb-9">
        <PitchSelector />
      </div>
    </section>
  );
}
