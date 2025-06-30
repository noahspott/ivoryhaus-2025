// Lib
import { useSynthStore } from "@/src/providers/synth-store-provider";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef, useEffect, useLayoutEffect } from "react";

// Consts
const MAX_BINAURAL_FREQUENCY = 40;

export default function BinauralBeatsSelector() {
  const binauralFreq = useSynthStore((state) => state.binauralFreq);
  const updateBinauralFreq = useSynthStore((state) => state.updateBinauralFreq);

  const motionBinauralFreq = useMotionValue(binauralFreq);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const x = useTransform(motionBinauralFreq, (value) => {
    const width = trackRef.current?.getBoundingClientRect()?.width ?? 0;
    return (value / MAX_BINAURAL_FREQUENCY) * width;
  });

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const width = track.getBoundingClientRect().width;
    x.set((motionBinauralFreq.get() / MAX_BINAURAL_FREQUENCY) * width);

    const unsubscribe = motionBinauralFreq.on("change", (value) => {
      x.set((value / MAX_BINAURAL_FREQUENCY) * width);
    });

    return () => unsubscribe();
  }, [motionBinauralFreq, x]);

  useEffect(() => {
    const unsubscribe = motionBinauralFreq.on("change", (latest) => {
      updateBinauralFreq(latest);
    });
    return () => unsubscribe();
  }, [motionBinauralFreq, binauralFreq, updateBinauralFreq]);

  function handleDrag(event: MouseEvent | TouchEvent | PointerEvent): void {
    const track = trackRef.current?.getBoundingClientRect();
    if (!track) return;

    let clientX: number;

    if ("touches" in event) {
      clientX = event.touches[0]?.clientX ?? 0;
    } else {
      clientX = event.clientX;
    }

    const relativeX = clientX - track.left;
    const percent = relativeX / track.width;
    const clampedPercent = Math.max(0, Math.min(1, percent));

    const value =
      Math.round(clampedPercent * MAX_BINAURAL_FREQUENCY * 100) / 100;

    motionBinauralFreq.set(value);
  }

  return (
    <div ref={trackRef} className="relative">
      <div className="h-0.5 w-full absolute bg-gradient-to-r from-primary-800 via-primary-600 to-primary-800 top-[22px] rounded-full" />
      <motion.div
        onDrag={handleDrag}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={trackRef}
        className="bg-primary-600 hover:cursor-pointer relative z-10 border border-primary-500 h-12 w-5 rounded-[28px]"
        role="slider"
        tabIndex={0}
        style={{ x }}
      />
    </div>
  );
}
