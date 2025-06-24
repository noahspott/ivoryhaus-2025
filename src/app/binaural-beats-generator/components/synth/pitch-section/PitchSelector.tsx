"use client";

// Lib
import { get } from "@tonaljs/note";
import clsx from "clsx";
import { useSynthStore } from "@/src/providers/synth-store-provider";

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
  const { note, updateNote } = useSynthStore((store) => store);

  function handlePitchButtonClick(noteName: string, note: NoteType) {
    const octave = note.oct;
    const newNoteString = `${noteName}${octave}`;
    updateNote(get(newNoteString));
  }

  function isSelected(noteName: string, note: NoteType): boolean {
    return note.pc === noteName;
  }

  return (
    <div className="relative h-[100px]">
      {NOTE_NAMES.map((noteName, index) => {
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
              handleButtonClick={() => handlePitchButtonClick(noteName, note)}
              className={clsx({
                "relative -left-8": noteName.length > 1,
              })}
              isSelected={isSelected(noteName, note)}
              noteName={noteName}
            />
          </div>
        );
      })}
    </div>
  );
}
