import React from 'react';
import { StyledButton } from './styled';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <StyledButton
      type="button"
      className={`storybook-button storybook-button--${size} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
