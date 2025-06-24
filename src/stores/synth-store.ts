import { NoteType } from "@tonaljs/note";
import { createStore } from "zustand/vanilla";
import { get } from "@tonaljs/note";

export type SynthState = {
  a4Freq: number;
  note: NoteType;
};

export type SynthActions = {
  updateA4Freq: (newFrequency: number) => void;
  updateNote: (newNote: NoteType) => void;
};

export type SynthStore = SynthState & SynthActions;

export const defaultInitState: SynthState = {
  a4Freq: 440,
  note: get("C4"),
};

export const createSynthStore = (initState: SynthState = defaultInitState) => {
  return createStore<SynthStore>()((set) => ({
    ...initState,
    updateA4Freq: (newFrequency) => set(() => ({ a4Freq: newFrequency })),
    updateNote: (newNote) => set(() => ({ note: newNote })),
  }));
};
