"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type SynthStore, createSynthStore } from "../stores/synth-store";

export type SynthStoreApi = ReturnType<typeof createSynthStore>;

export const SynthStoreContext = createContext<SynthStoreApi | undefined>(
  undefined
);

export interface SynthStoreProviderProps {
  children: ReactNode;
}

export const SynthStoreProvider = ({ children }: SynthStoreProviderProps) => {
  const storeRef = useRef<SynthStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createSynthStore();
  }

  return (
    <SynthStoreContext.Provider value={storeRef.current}>
      {children}
    </SynthStoreContext.Provider>
  );
};

export const useSynthStore = <T,>(selector: (store: SynthStore) => T): T => {
  const synthStoreContext = useContext(SynthStoreContext);

  if (!synthStoreContext) {
    throw new Error(`useSynthStore must be used within SynthStoreProvider`);
  }

  return useStore(synthStoreContext, selector);
};
