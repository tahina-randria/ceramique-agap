import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "100" | "300";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: boolean;
  href?: string;
  desktopLabel?: string;
  mobileLabel?: string;
}

type ButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "300",
      fullWidth = false,
      icon = false,
      href,
      desktopLabel,
      mobileLabel,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      "button",
      `button--${variant}`,
      `button--${size}`,
      icon && "button--icon",
      fullWidth && "button--full-width",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const content = (
      <span className="button__content button__content--center">
        {desktopLabel && mobileLabel ? (
          <span className="button__content-wrapper">
            <span className="button__content-desktop title-style1-200">
              {desktopLabel}
            </span>
            <span className="button__content-mobile">{mobileLabel}</span>
          </span>
        ) : (
          children
        )}
      </span>
    );

    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
