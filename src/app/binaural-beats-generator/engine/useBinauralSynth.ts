import { useEffect, useRef } from "react";
import * as Tone from "tone";
import { useSynthStore } from "@/src/providers/synth-store-provider";

export function useBinauralSynth() {
  const isPlaying = useSynthStore((s) => s.isPlaying);
  const baseNote = useSynthStore((s) => s.note);
  const waveform = useSynthStore((s) => s.waveform);
  const binauralFreq = useSynthStore((s) => s.binauralFreq);
  const volume = useSynthStore((s) => s.volume);

  const leftOscRef = useRef<Tone.Oscillator | null>(null);
  const rightOscRef = useRef<Tone.Oscillator | null>(null);
  const leftPanRef = useRef<Tone.Panner | null>(null);
  const rightPanRef = useRef<Tone.Panner | null>(null);
  const gainRef = useRef<Tone.Gain | null>(null);
  const envelopeRef = useRef<Tone.Envelope | null>(null);

  // Setup synth engine
  useEffect(() => {
    // Create nodes
    const envelope = new Tone.AmplitudeEnvelope({
      attack: 1,
      decay: 0.1,
      sustain: 1.0,
      release: 0.5,
    }).toDestination();
    const gain = new Tone.Gain(volume).toDestination();
    const leftPan = new Tone.Panner(-1).connect(gain);
    const rightPan = new Tone.Panner(1).connect(gain);

    const baseFreq = baseNote.freq as number;
    const halfOffset = binauralFreq / 2;

    const leftOsc = new Tone.Oscillator(
      baseFreq - halfOffset,
      waveform.toString()
    ).connect(leftPan);

    const rightOsc = new Tone.Oscillator(
      baseFreq + halfOffset,
      waveform.toString()
    ).connect(rightPan);

    leftOscRef.current = leftOsc;
    rightOscRef.current = rightOsc;
    leftPanRef.current = leftPan;
    rightPanRef.current = rightPan;
    gainRef.current = gain;
    envelopeRef.current = envelope;

    if (isPlaying) {
      leftOsc.start();
      rightOsc.start();
    }

    return () => {
      leftOsc.stop();
      rightOsc.stop();
      leftOsc.dispose();
      rightOsc.dispose();
      leftPan.dispose();
      rightPan.dispose();
      gain.dispose();
      envelope.dispose();
    };
  }, []); // initialize once

  // Toggle playback
  useEffect(() => {
    if (isPlaying) {
      Tone.start(); // Ensures audio context is started
      leftOscRef.current?.start();
      rightOscRef.current?.start();
    } else {
      leftOscRef.current?.stop();
      rightOscRef.current?.stop();
    }
  }, [isPlaying]);

  // React to waveform changes
  useEffect(() => {
    if (leftOscRef.current) leftOscRef.current.type = waveform.toString();
    if (rightOscRef.current) rightOscRef.current.type = waveform.toString();
  }, [waveform]);

  // React to volume changes
  useEffect(() => {
    if (gainRef.current) gainRef.current.gain.rampTo(volume, 0.025);
  }, [volume]);

  // React to note and binaural frequency changes
  useEffect(() => {
    if (!leftOscRef.current || !rightOscRef.current) return;
    const baseFreq = baseNote.freq as number;
    const halfOffset = binauralFreq / 2;

    leftOscRef.current.frequency.value = baseFreq - halfOffset;
    rightOscRef.current.frequency.value = baseFreq + halfOffset;
  }, [baseNote, binauralFreq]);
}
