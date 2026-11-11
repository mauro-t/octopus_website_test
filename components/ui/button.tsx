import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps =
  | ({ as?: "button"; variant?: Variant; icon?: boolean } & ComponentProps<"button">)
  | ({ as: "link"; variant?: Variant; icon?: boolean; disabled?: boolean } & Omit<
      ComponentProps<typeof Link>,
      "as"
    >);

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent border-stroke-accent focus-visible:bg-accent-lighter hover:bg-accent-lighter active:bg-accent-darker disabled:bg-primary-darker disabled:text-disabled disabled:border-primary-darker aria-disabled:bg-primary-darker aria-disabled:text-disabled aria-disabled:border-primary-darker text-white",
  secondary:
    "border-stroke bg-white hover:bg-primary active:bg-primary-darker disabled:bg-primary-darker disabled:text-disabled aria-disabled:bg-primary-darker aria-disabled:text-disabled",
  ghost:
    "text-ghost hover:text-black focus-visible:text-black active:text-black disabled:text-disabled aria-disabled:text-disabled",
};

const baseClasses =
  "inline-flex items-center justify-center border border-transparent py-[11px] rounded-full leading-none focus-ring disabled:pointer-events-none aria-disabled:pointer-events-none";

export default function Button(props: ButtonProps) {
  if (props.as === "link") {
    const { as: _as, className, variant = "primary", icon, disabled, ...rest } = props;

    return (
      <Link
        {...rest}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={twMerge(
          clsx(baseClasses, icon ? "px-[11px]" : "px-16", variantClasses[variant], className),
        )}
      />
    );
  }

  const { as: _as, className, variant = "primary", icon, type = "button", ...rest } = props;

  return (
    <button
      {...rest}
      type={type}
      className={twMerge(
        clsx(baseClasses, icon ? "px-[11px]" : "px-16", variantClasses[variant], className),
      )}
    />
  );
}
