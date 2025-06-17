"use client";

// Lib
import { useState } from "react";

// Components
import { ChevronUp, ChevronDown } from "lucide-react";

export default function OctaveSelector() {
  const [octave, setOctave] = useState<number>(3);
  const LOWEST_OCTAVE = 0;
  const HIGHEST_OCTAVE = 8;

  function handleButtonClick(action: "INCREMENT" | "DECREMENT") {
    if (action === "INCREMENT") {
      setOctave((prev) => Math.min(HIGHEST_OCTAVE, prev + 1));
    }

    if (action === "DECREMENT") {
      setOctave((prev) => Math.max(LOWEST_OCTAVE, prev - 1));
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
        {`C${octave}`}
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
