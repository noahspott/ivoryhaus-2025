import clsx from "clsx";

export default function PitchButton({
  handleButtonClick,
  isSelected,
  className,
  noteName,
}: {
  handleButtonClick: () => void;
  isSelected: boolean;
  className: string;
  noteName: string;
}) {
  return (
    <button
      onClick={() => handleButtonClick()}
      className={clsx(
        "text-primary-50 hover:cursor-pointer rounded-full label-medium-emphasized text-center size-[50px] flex items-center justify-center",
        className,
        {
          "bg-primary-500": isSelected,
          "bg-primary-800 border border-primary-700": !isSelected,
        }
      )}
      tabIndex={0}
    >
      {noteName}
    </button>
  );
}
