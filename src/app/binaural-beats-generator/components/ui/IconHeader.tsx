import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

export default function IconHeader({
  Icon,
  children,
  variant = "MEDIUM",
}: {
  Icon: LucideIcon;
  children: React.ReactNode;
  variant: "SMALL" | "MEDIUM" | "LARGE";
}) {
  return (
    <div
      className={clsx(`flex items-center`, {
        "gap-2": variant === "SMALL" || variant === "MEDIUM",
        "gap-2.5": variant === "LARGE",
      })}
    >
      <Icon
        className={clsx("text-primary-200", {
          "size-5": variant === "SMALL",
          "size-6": variant === "MEDIUM" || variant === "LARGE",
        })}
      />
      <p
        className={clsx("text-primary-50", {
          "title-small-emphasized": variant === "SMALL",
          "title-medium": variant === "MEDIUM",
          "headline-small": variant === "LARGE",
        })}
      >
        {children}
      </p>
    </div>
  );
}
