import React from "react";
import styled from "styled-components";
import { colors } from "../../theme/constants";

interface ButtonProps {
  buttonType?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  state?: "default" | "disabled";
  leftIcon?: boolean;
  rightIcon?: boolean;
  width?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const StyledButton = styled.button<{ width?: string }>`
  &.loop-button {
    width: ${(props) => props.width};
    font-family: Arial, sans-serif;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: inline-block;
  }

  &.loop-button--primary {
    color: ${colors.white};
    background-color: ${colors.violet};
  }

  &.loop-button--secondary {
    color: ${colors.black};
    background-color: ${colors.secondaryGray};
  }
  &.loop-button--danger {
    color: ${colors.white};
    background-color: ${colors.red};
  }

  &.loop-button--small {
    font-size: 12px;
    padding: 4px 14px;
  }

  &.loop-button--medium {
    font-size: 14px;
    padding: 8px 18px;
  }

  &.loop-button--large {
    font-size: 20px;
    padding: 10px 24px;
  }
  &.loop-button--disabled {
    background-color: ${colors.gray};
  }
`;

export const Button = ({
  buttonType = "primary",
  size = "medium",
  state = "default",
  ...props
}: ButtonProps) => {
  const mode = buttonType && `loop-button--${buttonType}`;
  const buttonState = state === "disabled" && `loop-button--${state}`;
  return (
    <StyledButton
      type="button"
      className={`loop-button loop-button--${size} ${mode} ${buttonState}`}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};
