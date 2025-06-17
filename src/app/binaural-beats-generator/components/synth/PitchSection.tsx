import IconHeader from "../ui/IconHeader";
import { Music2Icon } from "lucide-react";

export default function PitchSection() {
  return (
    <section className="p-3 synth-module">
      <IconHeader Icon={Music2Icon} variant="MEDIUM">
        Center Pitch
      </IconHeader>
    </section>
  );
}
