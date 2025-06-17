import { Play, Pause } from "lucide-react";

type PlayButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isPlaying: boolean;
};

export default function PlayButton({ isPlaying, ...rest }: PlayButtonProps) {
  return (
    <button {...rest} className="text-primary-50 hover:cursor-pointer p-3">
      {isPlaying ? (
        <Pause className="size-6 p-0.5" />
      ) : (
        <Play className="size-6 p-0.5" />
      )}
    </button>
  );
}
