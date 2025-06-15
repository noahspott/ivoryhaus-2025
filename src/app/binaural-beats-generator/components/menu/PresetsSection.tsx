"use client";

import IconHeader from "../ui/IconHeader";
import { Sliders } from "lucide-react";

export default function PresetsSection() {
  const presets = [
    "5Hz - Deep Sleep",
    "6Hz - Evening Wind-Down",
    "10Hz - Flow State",
    "14Hz - Mental Sharpness",
    "40Hz - Focused Study",
  ];

  function presetClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e.currentTarget.id);
  }

  return (
    <section className="flex flex-col gap-4">
      <IconHeader Icon={Sliders} variant="SMALL">
        Presets
      </IconHeader>
      <ul className="flex flex-col gap-2">
        {presets.map((preset) => {
          return (
            <li key={preset}>
              <button
                id={preset}
                onClick={(e) => presetClickHandler(e)}
                className="text-left text-primary-50 body-medium hover:cursor-pointer"
              >
                {preset}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
