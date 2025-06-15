import { InputHTMLAttributes, SetStateAction } from "react";

type NumberInputProps = InputHTMLAttributes<HTMLInputElement> & {
  stateVariable: number;
  setter: React.Dispatch<SetStateAction<number>>;
};

export default function NumberInput({
  stateVariable,
  setter,
  ...rest
}: NumberInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;

    if (
      input === "" ||
      (/^-?\d*\.?\d*$/.test(input) && Number(input) >= 0 && Number(input) <= 60)
    ) {
      setter(Number(input));
    }
  }

  return (
    <input
      type="text"
      value={stateVariable}
      inputMode="decimal"
      onChange={handleChange}
      {...rest}
    />
  );
}
