"use client";

// Lib
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useSynthStore } from "@/src/providers/synth-store-provider";

// Consts
const KNOB_WIDTH = 12;
const TRACK_WIDTH = 120;
const SCROLLABLE_TRACK_WIDTH = TRACK_WIDTH - KNOB_WIDTH;

export default function VolumeSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const updateVolume = useSynthStore((state) => state.updateVolume);
  const volume = useSynthStore((state) => state.volume);
  const motionVolume = useMotionValue(volume);
  const knobPosition = useTransform(
    motionVolume,
    [0, 1],
    [0, SCROLLABLE_TRACK_WIDTH]
  );

  useEffect(() => {
    const unsubscribe = motionVolume.on("change", (latest) => {
      updateVolume(latest);
    });
    return () => unsubscribe();
  }, [motionVolume, updateVolume]);

  function handleDrag(event: MouseEvent | PointerEvent | TouchEvent) {
    const track = trackRef.current?.getBoundingClientRect();
    if (!track) return;

    let clientX: number;

    if ("touches" in event) {
      clientX = event.touches[0]?.clientX ?? 0;
    } else {
      clientX = event.clientX;
    }

    const x = clientX - track.left;
    const percent = x / track.width;
    const clamped = Math.max(0, Math.min(1, percent));

    motionVolume.set(clamped);
  }

  function handleKeyVolumeChange(event: React.KeyboardEvent<HTMLDivElement>) {
    const stepAmount = 0.1;
    let change = 0;

    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      change = -stepAmount;
    } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      change = stepAmount;
    }

    const newValue = Math.max(0, Math.min(1, motionVolume.get() + change));
    motionVolume.set(newValue);
  }

  return (
    <div ref={trackRef} className="relative">
      <motion.div
        id="slider-knob"
        className={`absolute bg-primary-50 rounded-full -top-[5px] hover:cursor-pointer z-20 focus:ring-2 focus:ring-primary-300 active:ring-primary-300`}
        tabIndex={0}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={SCROLLABLE_TRACK_WIDTH}
        aria-valuenow={volume}
        aria-valuetext={`${volume}%`}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={trackRef}
        style={{
          x: knobPosition.get() - KNOB_WIDTH / 2,
          width: KNOB_WIDTH,
          height: KNOB_WIDTH,
        }}
        onDrag={(e) => {
          handleDrag(e);
        }}
        onKeyDown={(e) => {
          handleKeyVolumeChange(e);
        }}
      />
      <motion.div
        id="volume-slider-top"
        className="absolute top-0 z-10 left-0 bg-primary-50 rounded-full h-0.5"
        style={{
          width: knobPosition.get(),
        }}
      />
      <div
        className="h-0.5 bg-primary-300 rounded-full"
        style={{ width: TRACK_WIDTH }}
      />
    </div>
  );
}
