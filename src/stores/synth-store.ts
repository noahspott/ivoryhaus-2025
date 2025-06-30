import { NoteType } from "@tonaljs/note";
import { createStore } from "zustand/vanilla";
import { get } from "@tonaljs/note";
import { Waveform } from "../types/Waveform";

export type SynthState = {
  note: NoteType;
  a4Freq: number;
  waveform: Waveform;
  binauralFreq: number;
};

export type SynthActions = {
  updateNote: (newNote: NoteType) => void;
  updateA4Freq: (newFrequency: number) => void;
  updateWaveform: (newWaveform: Waveform) => void;
  updateBinauralFreq: (newBinauralFreq: number) => void;
};

export type SynthStore = SynthState & SynthActions;

export const defaultInitState: SynthState = {
  note: get("C4"),
  a4Freq: 440,
  waveform: Waveform.Sine,
  binauralFreq: 20,
};

export const createSynthStore = (initState: SynthState = defaultInitState) => {
  return createStore<SynthStore>()((set) => ({
    ...initState,
    updateNote: (newNote) => set(() => ({ note: newNote })),
    updateA4Freq: (newFrequency) => set(() => ({ a4Freq: newFrequency })),
    updateWaveform: (newWaveform) => set(() => ({ waveform: newWaveform })),
    updateBinauralFreq: (newBinauralFreq) =>
      set(() => ({ binauralFreq: newBinauralFreq })),
  }));
};
