// Lib
import { useSynthStore } from "@/src/providers/synth-store-provider";

// Components
import { Play, Pause } from "lucide-react";

type PlayButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PlayButton({ ...rest }: PlayButtonProps) {
  const isPlaying = useSynthStore((state) => state.isPlaying);
  const updateIsPlaying = useSynthStore((state) => state.updateIsPlaying);

  return (
    <button
      {...rest}
      onClick={() => updateIsPlaying(!isPlaying)}
      className="text-primary-50 hover:cursor-pointer p-3"
    >
      {isPlaying ? (
        <Pause className="size-6 p-0.5" />
      ) : (
        <Play className="size-6 p-0.5" />
      )}
    </button>
  );
}
