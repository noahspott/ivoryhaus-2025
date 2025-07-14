import { clsx } from "clsx";

export default function Visualizer({
  className,
  ...rest
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      {...rest}
      className={clsx("w-full flex gap-8 text-white", className)}
    ></section>
  );
}
