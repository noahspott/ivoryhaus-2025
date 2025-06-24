// Lib
import { useSynthStore } from "@/src/providers/synth-store-provider";

// Components
import { ChevronUp, ChevronDown } from "lucide-react";
import { get, transposeOctaves } from "@tonaljs/note";

export default function OctaveSelector() {
  const { note, updateNote } = useSynthStore((state) => state);
  const LOWEST_OCTAVE = 0;
  const HIGHEST_OCTAVE = 8;

  function handleButtonClick(action: "INCREMENT" | "DECREMENT") {
    const oldOctave = note.oct ?? 4;

    if (action === "INCREMENT") {
      const transposeAmount = oldOctave < HIGHEST_OCTAVE ? 1 : 0;
      updateNote(get(transposeOctaves(note.name, transposeAmount)));
    }

    if (action === "DECREMENT") {
      const transposeAmount = oldOctave > LOWEST_OCTAVE ? -1 : 0;
      updateNote(get(transposeOctaves(note.name, transposeAmount)));
    }
  }

  return (
    <div className="text-primary-50 bg-primary-800 border border-primary-700 rounded-full overflow-hidden">
      <button
        className="px-2.5 py-1.5 hover:cursor-pointer group active:scale-95"
        onClick={() => handleButtonClick("INCREMENT")}
      >
        <ChevronUp className="h-6 w-6 p-0.5 group-active:scale-95" />
      </button>
      <div className="title-medium-emphasized text-center py-3 border-y border-primary-700">
        {`C${note.oct}`}
      </div>
      <button
        className="px-2.5 py-1.5 hover:cursor-pointer group active:scale-95"
        onClick={() => handleButtonClick("DECREMENT")}
      >
        <ChevronDown className="h-6 w-6 p-0.5 group-active:scale-95" />
      </button>
    </div>
  );
}
