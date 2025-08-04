// Lib
import * as Tone from "tone";

// Hooks
import { useEffect, useRef } from "react";
import { useSynthStore } from "@/src/providers/synth-store-provider";

export function useBinauralSynth() {
  const volume = useSynthStore((s) => s.volume);
  const baseNote = useSynthStore((s) => s.note);
  const waveform = useSynthStore((s) => s.waveform);
  const isPlaying = useSynthStore((s) => s.isPlaying);
  const binauralFreq = useSynthStore((s) => s.binauralFreq);

  const gainRef = useRef<Tone.Gain | null>(null);
  const leftPanRef = useRef<Tone.Panner | null>(null);
  const rightPanRef = useRef<Tone.Panner | null>(null);
  const envelopeRef = useRef<Tone.Envelope | null>(null);
  const leftOscRef = useRef<Tone.Oscillator | null>(null);
  const rightOscRef = useRef<Tone.Oscillator | null>(null);

  // Setup synth engine
  useEffect(() => {
    // Create nodes
    const envelope = new Tone.AmplitudeEnvelope({
      attack: 1,
      decay: 0.1,
      sustain: 1.0,
      release: 1,
    }).toDestination();
    const gain = new Tone.Gain(volume).connect(envelope);
    const leftPan = new Tone.Panner(-1).connect(gain);
    const rightPan = new Tone.Panner(1).connect(gain);

    const baseFreq = baseNote.freq as number;
    const halfOffset = binauralFreq / 2;

    const leftOsc = new Tone.Oscillator(
      baseFreq - halfOffset,
      waveform.toString() as OscillatorType
    ).connect(leftPan);

    const rightOsc = new Tone.Oscillator(
      baseFreq + halfOffset,
      waveform.toString() as OscillatorType
    ).connect(rightPan);

    leftOscRef.current = leftOsc;
    rightOscRef.current = rightOsc;
    leftPanRef.current = leftPan;
    rightPanRef.current = rightPan;
    gainRef.current = gain;
    envelopeRef.current = envelope;

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
  }, []);

  // Toggle playback
  useEffect(() => {
    if (isPlaying) {
      leftOscRef.current?.start();
      rightOscRef.current?.start();
      envelopeRef.current?.triggerAttack();
    } else {
      envelopeRef.current?.triggerRelease();

      const releaseTime = envelopeRef.current?.release || 0.1;

      // Stop oscillators *after* the release phase
      Tone.getTransport().scheduleOnce(() => {
        leftOscRef.current?.stop();
        rightOscRef.current?.stop();
      }, `+${releaseTime}`);
    }
  }, [isPlaying]);

  // React to waveform changes
  useEffect(() => {
    if (leftOscRef.current)
      leftOscRef.current.type = waveform.toString() as OscillatorType;
    if (rightOscRef.current)
      rightOscRef.current.type = waveform.toString() as OscillatorType;
  }, [waveform]);

  // React to volume changes
  useEffect(() => {
    const clampedVolume = Math.min(Math.max(volume, 0), 0.95);
    if (gainRef.current) gainRef.current.gain.rampTo(clampedVolume, 0.025);
  }, [volume]);

  // React to note and binaural frequency changes
  useEffect(() => {
    if (!leftOscRef.current || !rightOscRef.current) return;
    const baseFreq = baseNote.freq as number;
    const halfOffset = binauralFreq / 2;

    leftOscRef.current.frequency.value = baseFreq - halfOffset;
    rightOscRef.current.frequency.value = baseFreq + halfOffset;
  }, [baseNote, binauralFreq]);

  return {
    leftOsc: leftOscRef.current,
    rightOsc: rightOscRef.current,
  };
}
