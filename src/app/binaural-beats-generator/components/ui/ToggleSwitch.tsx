import clsx from "clsx";
import { InputHTMLAttributes, SetStateAction } from "react";

type ToggleSwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  isWav: boolean;
  setIsWav: React.Dispatch<SetStateAction<boolean>>;
};

export default function ToggleSwitch({
  isWav,
  setIsWav,
  ...rest
}: ToggleSwitchProps) {
  return (
    <label className="h-10 border border-primary-900 p-1 grid grid-cols-2 place-items-center">
      <input
        className="sr-only"
        type="checkbox"
        checked={isWav}
        onChange={(e) => setIsWav(e.target.checked)}
        {...rest}
      />
      <span
        className={clsx(
          "text-primary-50 label-large w-full h-full text-center select-none flex items-center justify-center",
          {
            "bg-primary-900": isWav,
            "": !isWav,
          }
        )}
      >
        WAV
      </span>
      <span
        className={clsx(
          "text-primary-50 label-large w-full h-full text-center select-none flex items-center justify-center",
          {
            "bg-primary-900": !isWav,
          }
        )}
      >
        MP3
      </span>
    </label>
  );
}
