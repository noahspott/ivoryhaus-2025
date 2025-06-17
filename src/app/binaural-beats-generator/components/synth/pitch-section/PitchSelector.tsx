"use client";

// Lib
import { useState } from "react";
import { get } from "@tonaljs/note";
import clsx from "clsx";

// Components
import PitchButton from "./PitchButton";

// Types
import type { NoteType } from "@tonaljs/note";

const NOTE_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export default function PitchSelector() {
  const [selectedNote, setSelectedNote] = useState<NoteType>(get("C4"));

  function handlePitchButtonClick(noteName: string) {
    console.log(`${noteName} selected!`);
    setSelectedNote(get(noteName));
  }

  return (
    <div className="relative h-[100px]">
      {NOTE_NAMES.map((noteName, index) => {
        const isSelected = selectedNote.name === noteName;

        return (
          <div
            key={noteName}
            className={clsx(`inline-block me-3`, {
              "relative -bottom-[50px]": noteName.length === 1,
              absolute: noteName.length > 1,
            })}
            style={{
              gridColumnStart: index + 1,
            }}
          >
            <PitchButton
              handleButtonClick={() => handlePitchButtonClick(noteName)}
              className={clsx({
                "relative -left-8": noteName.length > 1,
              })}
              isSelected={isSelected}
              noteName={noteName}
            />
          </div>
        );
      })}
    </div>
  );
}
