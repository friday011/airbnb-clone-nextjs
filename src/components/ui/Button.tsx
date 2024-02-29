"use client";
import React from "react";
import {
  Button as RACButton,
  ButtonProps as RACButtonProps
} from "react-aria-components";

export interface ButtonProps extends RACButtonProps {
  variant?: "primary" | "secondary" | "destructive" | "icon";
}

const Button = React.forwardRef<
  React.ElementRef<typeof RACButton>,
  ButtonProps
>((props, forwardedRef) => {
  return <RACButton ref={forwardedRef} {...props} />;
});
Button.displayName = "Button";

export { Button };
