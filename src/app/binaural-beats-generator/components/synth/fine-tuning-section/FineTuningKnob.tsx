"use client";

// Lib
import { SetStateAction, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "motion/react";

// Consts
const MIN_FREQUENCY = 415;
const MAX_FREQUENCY = 446;
const START_ANGLE = 135;
const END_ANGLE = 405;
const RADIUS = 38;
const DIAMETER = RADIUS * 2;
const TRACK_RADIUS = RADIUS - 8;
const CIRCLE_CENTER = {
  x: TRACK_RADIUS,
  y: TRACK_RADIUS,
};

export default function FineTuningKnob({
  frequency,
  setFrequency,
}: {
  frequency: number;
  setFrequency: React.Dispatch<SetStateAction<number>>;
}) {
  const freqValue = useMotionValue(frequency);

  useEffect(() => {
    freqValue.set(frequency);
  }, [frequency, freqValue]);

  const angleDeg = useTransform(
    freqValue,
    [MIN_FREQUENCY, MAX_FREQUENCY],
    [START_ANGLE, END_ANGLE]
  );

  const angleRad = useTransform(angleDeg, (deg) => (deg * Math.PI) / 180);

  const x = useTransform(
    angleRad,
    (rad) => CIRCLE_CENTER.x + TRACK_RADIUS * Math.cos(rad)
  );
  const y = useTransform(
    angleRad,
    (rad) => CIRCLE_CENTER.y + TRACK_RADIUS * Math.sin(rad)
  );

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>): void {
    let stepSize = 1;

    if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
      stepSize *= -1;
    } else if (e.key === "ArrowUp" || e.key === "ArrowRight") {
      stepSize *= 1;
    } else {
      return;
    }

    setFrequency((prev) =>
      clamp(prev + stepSize, MIN_FREQUENCY, MAX_FREQUENCY)
    );
  }

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  function handleDrag(
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { delta: { x: number; y: number } }
  ) {
    const { delta } = info;
    const sensitivity = 0.8;
    const freqChange = sensitivity * (delta.x - delta.y);
    const newFreq = clamp(
      freqValue.get() + freqChange,
      MIN_FREQUENCY,
      MAX_FREQUENCY
    );

    freqValue.set(newFreq);
    setFrequency(newFreq);
  }

  return (
    <div className="relative">
      <motion.div
        className="relative hover:cursor-pointer rounded-full bg-primary-800 border border-primary-700"
        style={{
          width: DIAMETER,
          height: DIAMETER,
          x: 0,
          y: 0,
        }}
        role="slider"
        tabIndex={0}
        aria-label="Fine tuning knob"
        aria-valuemin={MIN_FREQUENCY}
        aria-valuemax={MAX_FREQUENCY}
        aria-valuenow={frequency}
        aria-valuetext={`${frequency} Hz`}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        drag
        dragElastic={0}
        onDrag={handleDrag}
        dragMomentum={false}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 1000, bounceDamping: 1000 }}
        onDoubleClick={() => setFrequency(440)}
      >
        <motion.div
          className="bg-indigo-50 size-1.5 absolute rounded-full"
          style={{
            x: useTransform(x, (val) => val + 3),
            y: useTransform(y, (val) => val + 3),
          }}
        />
      </motion.div>
    </div>
  );
}
