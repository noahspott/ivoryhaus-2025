import { createStore } from "zustand/vanilla";

export type SynthState = {
  a4Freq: number;
};

export type SynthActions = {
  updateA4Freq: (newFrequency: number) => void;
};

export type SynthStore = SynthState & SynthActions;

export const defaultInitState: SynthState = {
  a4Freq: 440,
};

export const createSynthStore = (initState: SynthState = defaultInitState) => {
  return createStore<SynthStore>()((set) => ({
    ...initState,
    updateA4Freq: (newFrequency) => set(() => ({ a4Freq: newFrequency })),
  }));
};
