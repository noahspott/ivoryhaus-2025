"use client";

// Lib
import { useState } from "react";

// Components
import PlayButton from "./PlayButton";
import VolumeSlider from "./VolumeSlider";

export default function AudioControls() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function playButtonHandler() {
    setIsPlaying((oldValue) => !oldValue);
  }

  return (
    <div className="border border-primary-800 flex items-center px-6 rounded-[28px] w-2xs justify-between">
      <PlayButton isPlaying={isPlaying} onClick={() => playButtonHandler()} />
      <VolumeSlider />
    </div>
  );
}
