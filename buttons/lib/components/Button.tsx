import React, { FC } from "react";
import "./Button.sass";
import Icon from "@material-ui/core/Icon";

interface ButtonProps {
  variant?: "raised" | "outline" | "text";
  disableShadow?: true;
  disabled?: true;
  startIcon?: string;
  endIcon?: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
}

const Button: FC<ButtonProps> = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  children,
}) => {
  const buttonClasses =
    "btn " +
    `btn__variant-${variant ? variant : "raised"} ` +
    (disableShadow ? "btn--disable-shadow " : "") +
    (disabled ? "btn--disabled " : "") +
    `btn__size-${size ? size : "md"} ` +
    `btn__color-${color ? color : "default"}`;

  const renderIcon = (icon_uri?: string) => {
    return icon_uri ? <Icon className="btn__icon">{icon_uri}</Icon> : null;
  };
  return (
    <button className={buttonClasses}>
      {renderIcon(startIcon)}
      {children}
      {renderIcon(endIcon)}
    </button>
  );
};

export default Button;
