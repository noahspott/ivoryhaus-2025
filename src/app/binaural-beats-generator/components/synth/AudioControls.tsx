"use client";

// Components
import PlayButton from "./PlayButton";
import VolumeSlider from "./VolumeSlider";

export default function AudioControls() {
  return (
    <div className="border border-primary-800 flex items-center px-6 rounded-[28px] w-2xs justify-between">
      <PlayButton />
      <VolumeSlider />
    </div>
  );
}
