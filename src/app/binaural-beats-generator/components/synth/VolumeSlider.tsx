"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "motion/react";

export default function VolumeSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState<number>(70);
  const x = useMotionValue(volume);

  const KNOB_WIDTH = 12;
  const TRACK_WIDTH = 120;
  const SCROLLABLE_TRACK_WIDTH = TRACK_WIDTH - KNOB_WIDTH;

  useEffect(() => {
    x.set(volume);
  }, [volume, x]);

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
    const percent = (x / track.width) * SCROLLABLE_TRACK_WIDTH;
    const clamped = Math.max(0, Math.min(SCROLLABLE_TRACK_WIDTH, percent));

    setVolume(clamped);
  }

  function handleKeyVolumeChange(event: React.KeyboardEvent<HTMLDivElement>) {
    const track = trackRef.current?.getBoundingClientRect();
    if (!track) return;

    const stepAmount = 20;
    let division = Math.round(SCROLLABLE_TRACK_WIDTH / stepAmount);

    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      division = -division;
    }

    setVolume((prevVol) =>
      Math.max(0, Math.min(prevVol + division, SCROLLABLE_TRACK_WIDTH))
    );
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
          x,
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
          width: x,
        }}
      />
      <div
        className="h-0.5 bg-primary-300 rounded-full"
        style={{ width: TRACK_WIDTH }}
      />
    </div>
  );
}
