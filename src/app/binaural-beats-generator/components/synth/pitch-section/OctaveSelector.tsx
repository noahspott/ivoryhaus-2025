// Lib
import { useSynthStore } from "@/src/providers/synth-store-provider";
import clsx from "clsx";

// Components
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { get, transposeOctaves } from "@tonaljs/note";

export default function OctaveSelector({
  className = "",
  layout = "vertical",
}: {
  layout?: "vertical" | "horizontal";
  className?: string;
}) {
  const { note, updateNote } = useSynthStore((state) => state);
  const LOWEST_OCTAVE = 0;
  const HIGHEST_OCTAVE = 8;

  const IncrementIcon = layout === "vertical" ? ChevronUp : ChevronRight;
  const DecrementIcon = layout === "vertical" ? ChevronDown : ChevronLeft;

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
    <div
      className={clsx(
        className,
        "text-primary-50 bg-primary-800 border border-primary-700 rounded-full overflow-hidden flex flex-col",
        { "flex-col": layout === "vertical" },
        { "flex-row items-center": layout === "horizontal" }
      )}
    >
      <button
        className={clsx(
          "px-2.5 py-1.5 hover:cursor-pointer group active:scale-95",
          { "order-first": layout === "vertical" },
          { "order-last": layout === "horizontal" }
        )}
        onClick={() => handleButtonClick("INCREMENT")}
      >
        <IncrementIcon className="h-6 w-6 p-0.5 group-active:scale-95" />
      </button>
      <div
        className={clsx(
          "title-medium-emphasized text-center border-primary-700",
          { "border-y py-3": layout === "vertical" },
          { "border-x px-3": layout === "horizontal" }
        )}
      >
        {`C${note.oct}`}
      </div>
      <button
        className={clsx(
          "px-2.5 py-1.5 hover:cursor-pointer group active:scale-95",
          { "order-last": layout === "vertical" },
          { "order-first": layout === "horizontal" }
        )}
        onClick={() => handleButtonClick("DECREMENT")}
      >
        <DecrementIcon className="h-6 w-6 p-0.5 group-active:scale-95" />
      </button>
    </div>
  );
}
