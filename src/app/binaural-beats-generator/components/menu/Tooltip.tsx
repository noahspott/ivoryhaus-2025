"use client";

// Lib
import { useState } from "react";

// Components
import IconHeader from "../ui/IconHeader";
import { Info } from "lucide-react";

export default function Tooltip() {
  const [info, setInfo] = useState<string>(
    "Hover over any module to learn what it does."
  );

  return (
    <section className="flex flex-col gap-4">
      <IconHeader Icon={Info} variant="SMALL">
        Tooltip
      </IconHeader>
      <p className="text-primary-50 body-medium">{info}</p>
    </section>
  );
}
